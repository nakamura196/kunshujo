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


APP_DIR = settings.APP_DIR
DATA2_DIR = settings.DATA2_DIR
C_DIR = settings.C_DIR

csv = "data/kunshujo2022タスク管理 - 検索例.csv"

import pandas as pd

df = pd.read_csv(csv)

tmp = [
    {
        "label": "『捃拾帖』のなかの東大総長",
        "index": 1,
        "value": [
            {
                "label": "加藤弘之",
                "value": {
                    "name": "search-slug",
                    "query": {
                        "fc-agential": "chname:加藤弘之"
                    }
                }
            }
        ]
    }
]

tmp = []

map = {}

index_p = ""
group_p = ""

for _, row in df.iterrows():
    index = row["インデックス"]
    group = row["グループ"]
    
    if pd.isnull(index):
        index = index_p
        group = group_p
    else:
        index = int(index)
        index_p = index
        group_p = group

    if index not in map:
        map[index] = {
            "label": group,
            "index": index,
            "value": []
        }

    tag = row["タグ"]
    key = ""
    if "chname" in tag:
        key = "fc-agential"
    elif "place" in tag:
        key = "fc-place"
    elif "org" in tag:
        key = "fc-org"
    elif "keyword" in tag:
        key = "fc-keyword"

    item = {
        "label": row["タグ"],
        "value": {
            "name": "search-slug",
            "query": {
                key: tag
            }
        }
    }

    if not pd.isnull(row["画像"]):
        item["image"] = row["画像"]

    map[index]["value"].append(item)

    # print("i", index)

for index in map:
    tmp.append(map[index])
    
path = f"{APP_DIR}/static/data/example.json"

with open(path, 'w') as outfile:
    json.dump(tmp, outfile, ensure_ascii=False,
                indent=4, sort_keys=True, separators=(',', ': '))