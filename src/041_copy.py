import pandas as pd
import urllib.parse
import json
import copy
import os
import hashlib
import datetime
import itertools
import requests
import shutil

path = "/Users/nakamurasatoru/git/d_kunshujo/kunshujo/static/data/index.json"

with open(path) as f:
    index = json.load(f)

for item in index:
    manifest = item["manifest"]

    uuid = manifest.split("/")[-2]

    opath = "/Users/nakamurasatoru/git/d_kunshujo/kunshujo/static/data/iiif/{}/manifest.json".format(uuid)

    if not os.path.exists(opath):
        os.makedirs(os.path.dirname(opath), exist_ok=True)

        df = requests.get(manifest).json()
        with open(opath, 'w') as outfile:
            json.dump(df, outfile, ensure_ascii=False,
                indent=4, sort_keys=True, separators=(',', ': '))
