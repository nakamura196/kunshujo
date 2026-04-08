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

ipath = settings["top_path"] + "/docs/iiif/curation/top_imt3.json"
opath = settings["top_path"] + "/docs/iiif/curation/top_imt4.json"

files = glob.glob(settings["top_path"] + "/docs/gcv/curation_checked/*.json")

data = {}

ids = []

for i in range(len(files)):

    file = files[i]

    id = file.split("/")[-1].split(".")[0]
    ids.append(id)
    
    if i % 500 == 0:
        print(i + 1, len(files), id)

    with open(file) as f:
        curation_ = json.load(f)

        metadata = []

        values = []

        members = curation_["selections"][0]["members"]

        for member in members:
            uri = member["@id"]
            m_id = hashlib.md5(uri.encode('utf-8')).hexdigest()
            
            metadata_ = member["metadata"] if "metadata" in member else []

            metadata_map = {}

            for obj in metadata_:
                metadata_map[obj["label"]] = obj["value"]

            if "checked" not in metadata_map or metadata_map["checked"] != -1:

                label = member["label"]

                if label not in values and label not in settings["gcv_blacklist"]:

                    metadata.append({
                        "label" : "機械タグ2",
                        "value" : label
                    })

                    values.append(label)

        data[id] = metadata

def deleteExistMetadata(metadata):
    indexes = []

    for i in range(len(metadata)):
        obj = metadata[i]
        label = obj["label"]

        if label == "機械タグ2":
            indexes.append(i)

    indexes.reverse()

    for index in indexes:
        del metadata[index]
    
    return metadata

with open(ipath) as f:
    curation = json.load(f)

    selections = curation["selections"]

    for selection in selections:
        members = selection["members"]

        for member in members:
            id = hashlib.md5(member["@id"].encode('utf-8')).hexdigest()
            
            metadata = member["metadata"]
            metadata2 = deleteExistMetadata(metadata)
            
            if id in data:
                for m in data[id]:
                    metadata.append(m)

            if id in ids:            
                if "members" not in member:
                    member["members"] = {}
                member["members"]["機械タグ2"] = settings["top_url"] + "/gcv/curation_checked/" + id + ".json"
                

with open(opath, 'w') as outfile:
    json.dump(curation, outfile, ensure_ascii=False,
                indent=4, sort_keys=True, separators=(',', ': '))

