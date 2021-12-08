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

ipath = settings["top_path"] + "/docs/iiif/curation/top_imt2.json"
opath = settings["top_path"] + "/docs/iiif/curation/top_imt3.json"

with open("bk.json") as f:
    fb = json.load(f)

fb = fb["doc"]

data = {}

with open(ipath) as f:
    curation = json.load(f)

files = glob.glob("../gcv/data/*.json")

result = {}

for i in range(len(files)):

    file = files[i]

    id = file.split("/")[-1].split(".")[0]

    if i % 100 == 0:
        print(i + 1, len(files), id)

    # value = "no value"

    with open(file) as f:

        curation_ = json.load(f)

        members_length = len(curation_)

        if members_length == 0:
            continue

        if id in fb:
            subs = fb[id]["subCollection"]

            map = {}

            for key in subs:
                map = subs[key]

            count = 0

            for key in map:
                value = map[key]["value"]

                if value == 1 or value == -1:
                    count += 1

            if count == members_length:
                value = "completed"
            else:
                value = "in progress"

        else:
            value = "not edited"

    result[id] = value

for selection in curation["selections"]:

    for member in selection["members"]:

        uri = member["@id"]
        id = hashlib.md5(uri.encode('utf-8')).hexdigest()

        if id in result:
            value = result[id]
        else:
            value = "no value"

        member["metadata"].append({
            "label" : "機械タグ2_status",
            "value" : value
        })


with open(opath, 'w') as outfile:
    json.dump(curation, outfile, ensure_ascii=False,
                indent=4, sort_keys=True, separators=(',', ': '))