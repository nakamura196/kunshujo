import pandas as pd
import hashlib
import json
import requests
import os
from PIL import Image
import datetime
import glob

import requests
import shutil

files = glob.glob("/Users/nakamurasatoru/git/d_hi_ezu/suikeichuzu/static/data/curation_old/**/*.json", recursive=True)

for file in files:
  
  with open(file) as f:
    df = json.load(f)

  selections = df["selections"]

  for selection in selections:
    members = selection["members"]

    for member in members:
      xywh = member["@id"].split("#xywh=")[1]
      spl = xywh.split(",")
      x = int(spl[0]) * 2
      y = int(spl[1]) * 2
      w = int(spl[2]) * 2
      h = int(spl[3]) * 2
      xywh2 = "{},{},{},{}".format(x, y, w, h)

      member["@id"] = member["@id"].replace(xywh, xywh2)

      member["metadata"][0]["value"][0]["on"] = member["metadata"][0]["value"][0]["on"].replace(xywh, xywh2)


  with open(file.replace("curation_old", "curation"), 'w') as outfile:
      json.dump(df, outfile, ensure_ascii=False,
              indent=4, sort_keys=True, separators=(',', ': '))