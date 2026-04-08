import gzip
import settings
import shutil
import pandas as pd
import urllib.parse
import json
import copy
import os
import hashlib
import datetime
import itertools
today = datetime.datetime.now()
import pprint

def translate(tags, trans):
    tags2 = []
    for tag in tags:
        tag = trans[tag] if tag in trans else tag
        tags2.append(tag)
    return tags2

APP_DIR = settings.APP_DIR
DATA2_DIR = settings.DATA2_DIR
C_DIR = settings.C_DIR

files = [
    "gcv.json", 
    "index.json", 
    "entity.json"]

excludes = ["439de0af-e08a-476d-a4f4-db91daee0413", "c8e64d67-51af-4cfb-99f9-2c191ac4ef3b",
            "e4756874-9c62-4abf-9588-ab6b243df0ba", "28f334b3-8ef0-4e98-92d8-1f055514cef3", 
            "b9e50108-b8b0-43e5-ae16-c5c51d3e457c"]

trans_csv = "data/trans.csv"

import pandas as pd

df = pd.read_csv(trans_csv)

trans = {}
trans2 = {}

for index, row in df.iterrows():
    en = row['en']
    ja = row["ja"]
    trans[en] = ja
    trans2[ja] = en

for file in files:

    path = f"{APP_DIR}/static/data/{file}"

    items = []

    with open(path) as f:
        df = json.load(f)

        for item in df:
            uuid = None

            if "manifest" in item:
                manifest = item["manifest"]
                uuid = manifest.split("/")[-2]

            if uuid not in excludes:

                label = item["label"]
                if " [" in label:
                    label = label.split(" [")[0]

                label = label.replace("枚目枚目枚目枚目枚目", "枚目")

                if "p." in label:
                    label = label.replace("p.", "") + "枚目"

                if "gcv.json" in file:
                    label = trans[label] if label in trans else label

                item["label"] = label

                # color

                fields = ["color", "mtag", "タイプ"]

                for field in fields:
                    if field in item:
                        # pprint.pprint(translate(item[field], trans))
                        item[field] = translate(item[field], trans)

                # 並び順
                if "index.json" in file:
                    item["index"] = [str(len(items)).zfill(5)]

                items.append(item)



    with open(path, 'w') as outfile:
        json.dump(items, outfile, ensure_ascii=False,
                  indent=4, sort_keys=True, separators=(',', ': '))

path = f"{APP_DIR}/static/data/trans.json"

with open(path, 'w') as outfile:
    json.dump(trans2, outfile, ensure_ascii=False,
                indent=4, sort_keys=True, separators=(',', ': '))