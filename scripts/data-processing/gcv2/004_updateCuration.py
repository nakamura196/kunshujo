import shutil
import requests
import os
import json
import glob
import yaml
import sys
import urllib
import ssl
import csv
import time
import hashlib
import yaml

f = open("../data/settings.yml", "r+")
settings = yaml.safe_load(f)

with open("bk.json") as f:
    fb = json.load(f)

fb = fb["doc"]

files = glob.glob(settings["top_path"] + "/docs/gcv/curation/*.json")

for i in range(len(files)):

    file = files[i]

    if "top.json" in file:
        continue

    id = file.split("/")[-1].split(".")[0]

    if i % 100 == 0:
        print(i + 1, len(files), id)

    with open(file) as f:

        curation_ = json.load(f)

        members = curation_["selections"][0]["members"]

        for member in members:
            metadata = member["metadata"]
            for i in range(len(metadata)):
                index = len(metadata) - i - 1
                obj = metadata[index]
                label = obj["label"]

                if label == "Label":
                    value = obj["value"]
                    if value in settings["gcv_blacklist"]:
                        del member["metadata"]

        if id in fb:
            subs = fb[id]["subCollection"]

            map = {}

            for key in subs:
                map = subs[key]

            for member in members:
                uri = member["@id"]
                m_id = hashlib.md5(uri.encode('utf-8')).hexdigest()

                if m_id in map and "metadata" in member:
                    member["metadata"].append({
                        "label" : "checked",
                        "value" : map[m_id]["value"]
                    })

        with open(file.replace("/curation/", "/curation_checked/"), 'w') as outfile:
            json.dump(curation_, outfile, ensure_ascii=False,
                    indent=4, sort_keys=True, separators=(',', ': '))