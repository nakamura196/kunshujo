"""
Download entity thumbnails from Wikimedia and update entity.json with local paths.
Also handles example.json thumbnails.

Usage:
    python3 src/download_thumbnails.py
"""

import json
import os
import time
import urllib.request
import urllib.parse
from pathlib import Path

ROOT = Path(__file__).parent.parent
PUBLIC = ROOT / "public"
ENTITY_JSON = PUBLIC / "data" / "entity.json"
EXAMPLE_JSON = PUBLIC / "data" / "example.json"
ENTITY_IMG_DIR = PUBLIC / "images" / "entity"
EXAMPLE_IMG_DIR = PUBLIC / "images" / "example"

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}
DELAY = 0.8   # seconds between requests
MAX_RETRY = 3


MIN_FILE_SIZE = 1000  # bytes — smaller files are likely error pages


def is_valid_file(path: Path) -> bool:
    """Return True if file exists and is large enough to be a real image."""
    return path.exists() and path.stat().st_size >= MIN_FILE_SIZE


def download(url: str, dest: Path) -> bool:
    """Download URL to dest. Returns True on success."""
    if is_valid_file(dest):
        return True
    # Remove corrupt/empty file before re-downloading
    if dest.exists():
        dest.unlink()
    dest.parent.mkdir(parents=True, exist_ok=True)
    for attempt in range(1, MAX_RETRY + 1):
        try:
            req = urllib.request.Request(url, headers=HEADERS)
            with urllib.request.urlopen(req, timeout=20) as resp:
                dest.write_bytes(resp.read())
            return True
        except Exception as e:
            wait = DELAY * (2 ** attempt)  # exponential backoff
            print(f"  attempt {attempt} FAILED ({e}) — retrying in {wait:.1f}s")
            time.sleep(wait)
    return False


def safe_filename(url: str) -> str:
    """Derive a safe filename from a URL."""
    path = urllib.parse.urlparse(url).path
    name = path.split("/")[-1]
    # Remove leading size prefix like "200px-"
    if "px-" in name:
        name = name.split("px-", 1)[1]
    return urllib.parse.unquote(name)


def process_entity_json():
    data = json.loads(ENTITY_JSON.read_text(encoding="utf-8"))
    updated = 0
    failed = 0

    for item in data:
        url = item.get("thumbnail")
        if not url:
            continue

        # Reset broken local files so they get re-downloaded
        if url.startswith("/images/"):
            dest = PUBLIC / url.lstrip("/")
            if not is_valid_file(dest):
                print(f"  RESET (missing/corrupt): {url}")
                item["thumbnail"] = None
            continue

        # ja Wikipedia images are often 404 (non-free license) — skip
        if "/wikipedia/ja/" in url:
            item["thumbnail"] = None
            continue

        # PDF/TIFF cannot be displayed in browsers — skip
        lower = url.lower()
        if lower.endswith(".pdf") or lower.endswith(".tif") or lower.endswith(".tiff"):
            item["thumbnail"] = None
            continue

        # SVG thumbnails need .png suffix to get rasterized version
        if url.endswith(".svg"):
            url = url + ".png"

        filename = safe_filename(url)
        dest = ENTITY_IMG_DIR / filename
        local_path = f"/images/entity/{filename}"

        print(f"  {item['objectID'][:40]:40s} -> {filename[:40]}")
        if download(url, dest):
            item["thumbnail"] = local_path
            updated += 1
        else:
            failed += 1

        time.sleep(DELAY)

    ENTITY_JSON.write_text(
        json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    print(f"\nentity.json: {updated} updated, {failed} failed")


def process_example_json():
    data = json.loads(EXAMPLE_JSON.read_text(encoding="utf-8"))
    updated = 0
    failed = 0

    for item in data:
        for entry in item.get("value", []):
            url = entry.get("image")
            if not url:
                continue

            if url.startswith("/images/"):
                dest = PUBLIC / url.lstrip("/")
                if not is_valid_file(dest):
                    print(f"  RESET (missing/corrupt): {url}")
                    entry["image"] = None
                continue

            if "/wikipedia/ja/" in url:
                entry["image"] = None
                continue

            lower = url.lower()
            if lower.endswith(".pdf") or lower.endswith(".tif") or lower.endswith(".tiff"):
                entry["image"] = None
                continue

            if url.endswith(".svg"):
                url = url + ".png"

            filename = safe_filename(url)
            dest = EXAMPLE_IMG_DIR / filename
            local_path = f"/images/example/{filename}"

            print(f"  {entry.get('label','')[:40]:40s} -> {filename[:40]}")
            if download(url, dest):
                entry["image"] = local_path
                updated += 1
            else:
                failed += 1

            time.sleep(DELAY)

    EXAMPLE_JSON.write_text(
        json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    print(f"\nexample.json: {updated} updated, {failed} failed")


def fetch_wikipedia_thumbnail(label: str, lang: str = "ja"):
    """Query Wikipedia REST API for a page thumbnail URL."""
    # Wikipedia uses underscores in titles
    encoded = urllib.parse.quote(label.replace(" ", "_"), safe="")
    api_url = f"https://{lang}.wikipedia.org/api/rest_v1/page/summary/{encoded}"
    try:
        req = urllib.request.Request(api_url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read())
            thumb = data.get("thumbnail") or data.get("originalimage")
            if thumb:
                return thumb.get("source")
    except Exception:
        pass
    return None


def fetch_wikipedia_thumbnails_for_entities():
    """For entities without thumbnails, fetch from Wikipedia and download."""
    data = json.loads(ENTITY_JSON.read_text(encoding="utf-8"))
    # Sort by count descending so high-value entities are processed first
    no_thumb = [e for e in data if not e.get("thumbnail")]
    no_thumb.sort(key=lambda e: int(e.get("count", 0) or 0), reverse=True)

    updated = 0
    skipped = 0

    for item in no_thumb:
        label = item.get("label") or item.get("fulltext") or ""
        if not label:
            continue

        img_url = fetch_wikipedia_thumbnail(label)
        if not img_url:
            skipped += 1
            time.sleep(0.2)
            continue

        # Fix SVG
        if img_url.endswith(".svg"):
            img_url = img_url + ".png"

        filename = safe_filename(img_url)
        dest = ENTITY_IMG_DIR / filename
        local_path = f"/images/entity/{filename}"

        print(f"  {item['objectID'][:40]:40s} -> {filename[:40]}")
        if download(img_url, dest):
            item["thumbnail"] = local_path
            updated += 1
        else:
            skipped += 1

        time.sleep(DELAY)

    ENTITY_JSON.write_text(
        json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    print(f"\nWikipedia fetch: {updated} updated, {skipped} skipped/failed")


if __name__ == "__main__":
    import sys
    mode = sys.argv[1] if len(sys.argv) > 1 else "all"

    if mode in ("all", "entity"):
        print("=== Downloading entity thumbnails (existing URLs) ===")
        process_entity_json()

    if mode in ("all", "example"):
        print("\n=== Downloading example thumbnails ===")
        process_example_json()

    if mode in ("all", "wiki"):
        print("\n=== Fetching missing entity thumbnails from Wikipedia ===")
        fetch_wikipedia_thumbnails_for_entities()

    print("\nDone.")
