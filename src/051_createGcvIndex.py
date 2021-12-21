import pandas as pd
import urllib.parse
import json
import copy
import os
import hashlib
import datetime
import itertools
today = datetime.datetime.now()

import shutil



path = "/Users/nakamurasatoru/git/d_omeka/omekac_dd2/docs/curation/mod.json"

with open(path) as f:
    st = json.load(f)

path = "/Users/nakamurasatoru/git/d_kunshujo/enc2021/src/projects/kunshujo/data/401_res.json"

dbl = []

with open(path) as f:
    dbl2 = json.load(f)

    for key in dbl2:
        if dbl2[key]["dbl"] == "good":
            dbl.append(key)

print(len(dbl))

index = []

selections = st["selections"]

sims = {}

path = "data/excludes.json"

with open(path) as f:
    excludes= json.load(f)

for selection in selections:
  members = selection["members"]

  manifest = selection["within"]["@id"]
  label = selection["within"]["label"]

  for member in members:

    member_id = member["@id"]

    # id = hashlib.md5((member_id + "gcv").encode('utf-8')).hexdigest()
    id = hashlib.md5((member_id).encode('utf-8')).hexdigest()

    if id not in dbl:
        continue

    label = member["label"]

    if label in excludes:
        continue

    score = ""
    metadata = member["metadata"]

    for m in metadata:
        if m["label"] == "Score":
            score = m["value"]

    mtags = []
    if label not in excludes:
        mtags.append(label)

    item = {
        "objectID": id,
        "label": label,
        "mtag": mtags,
        "thumbnail": member["thumbnail"],
        "manifest" : manifest,
        "member" : member_id,
        "within" : member["within"],
        "score" : [str(round(score, 2))],
        "_updated" : format(today, '%Y-%m-%d'),
    }

    metadata = member["metadata"]

    for m in metadata:
        label = m["label"]
        value = m["value"]

        if label == "Color":
            item["color"] = [value]
        elif label == "Score":
            item["score"] = [str(round(value, 1))]

    fulltexts = [item["label"]]

    
    item["fulltext"] = " ".join(fulltexts)

    index.append(item)

    #####

    sims[id] = {}

    keys = ["images", "texts"]

    for key in keys:

        if key in member:
            arr = []
            for uri in member[key]:
                id2 = hashlib.md5(uri.encode('utf-8')).hexdigest()
                arr.append(id2)
            sims[id][key] = arr

with open("../static/data/gcv.json", 'w') as outfile:
    json.dump(index, outfile, ensure_ascii=False,
                indent=4, sort_keys=True, separators=(',', ': '))

with open("../static/data/object_relation.json", 'w') as outfile:
    json.dump(sims, outfile, ensure_ascii=False,
                indent=4, sort_keys=True, separators=(',', ': '))