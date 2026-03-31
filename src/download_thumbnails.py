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
    "User-Agent": "Mozilla/5.0 (compatible; kunshujo-thumbnail-downloader/1.0)"
}


def download(url: str, dest: Path) -> bool:
    """Download URL to dest. Returns True on success."""
    if dest.exists():
        return True
    dest.parent.mkdir(parents=True, exist_ok=True)
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=15) as resp:
            dest.write_bytes(resp.read())
        return True
    except Exception as e:
        print(f"  FAILED: {e}")
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
        if not url or url.startswith("/images/"):
            continue

        filename = safe_filename(url)
        dest = ENTITY_IMG_DIR / filename
        local_path = f"/images/entity/{filename}"

        print(f"  {item['objectID'][:40]:40s} -> {filename[:40]}")
        if download(url, dest):
            item["thumbnail"] = local_path
            updated += 1
        else:
            failed += 1

        time.sleep(0.1)  # be polite to Wikimedia

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
            if not url or url.startswith("/images/"):
                continue

            filename = safe_filename(url)
            dest = EXAMPLE_IMG_DIR / filename
            local_path = f"/images/example/{filename}"

            print(f"  {entry.get('label','')[:40]:40s} -> {filename[:40]}")
            if download(url, dest):
                entry["image"] = local_path
                updated += 1
            else:
                failed += 1

            time.sleep(0.1)

    EXAMPLE_JSON.write_text(
        json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    print(f"\nexample.json: {updated} updated, {failed} failed")


if __name__ == "__main__":
    print("=== Downloading entity thumbnails ===")
    process_entity_json()

    print("\n=== Downloading example thumbnails ===")
    process_example_json()

    print("\nDone.")
