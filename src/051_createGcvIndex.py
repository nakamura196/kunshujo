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



path = "/Users/nakamurasatoru/git/d_omeka/omekac_dd/docs/curation/add_gcv.json"

with open(path) as f:
    st = json.load(f)

index = []

selections = st["selections"]

ops = ["Packaged goods"]

for selection in selections:
  members = selection["members"]

  manifest = selection["within"]["@id"]
  label = selection["within"]["label"]

  for member in members:

    member_id = member["@id"]

    id = hashlib.md5((member_id + "gcv").encode('utf-8')).hexdigest()

    label = member["label"]

    score = ""
    metadata = member["metadata"]

    for m in metadata:
        if m["label"] == "Score":
            score = m["value"]

    item = {
        "objectID": id,
        "label": label,
        "mtag": [label],
        "thumbnail": member["thumbnail"],
        "manifest" : manifest,
        "member" : member_id,
        "within" : member["within"],
        "score" : [str(round(score, 2))],
        "_updated" : format(today, '%Y-%m-%d'),
    }

    fulltexts = [item["label"]]

    
    item["fulltext"] = " ".join(fulltexts)

    index.append(item)

with open("../static/data/gcv.json", 'w') as outfile:
    json.dump(index, outfile, ensure_ascii=False,
                indent=4, sort_keys=True, separators=(',', ': '))