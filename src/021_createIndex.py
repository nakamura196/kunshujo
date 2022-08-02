import pandas as pd
import urllib.parse
import json
import copy
import os
import datetime
today = datetime.datetime.now()

import settings
import gzip

APP_DIR = settings.APP_DIR
DATA_DIR = settings.DATA_DIR
C_DIR = settings.C_DIR
OMEKA_DIR = settings.OMEKA_DIR

def getGeo(obj, map):
  geohash = obj["http://schema.org/geo"][0]["@id"]
  geo = map[geohash]
  return "{} {}".format(geo["http://schema.org/latitude"][0]["@value"], geo["http://schema.org/longitude"][0]["@value"])

path = f"{OMEKA_DIR}/src/rdf/data/all.json"

with open(path) as f:
    st = json.load(f)

path = "data/freq.json"

with open(path) as f:
    freq = json.load(f)

path = "data/reps.json"

with open(path) as f:
    reps = json.load(f)

map = {}

for obj in st:
  map[obj["@id"]] = obj

index = []

for obj in st:
  id = obj["@id"].replace("https://kunshujo.dl.itc.u-tokyo.ac.jp/api/", "").replace("/", ":")

  if id in reps:
    id = reps[id]

  # geohash等を除外
  if "@type" not in obj:
    continue

  item = {
    "objectID": id,
    "_updated" : format(today, '%Y-%m-%d'),
    "タイプ": [obj["@type"][0].split("/")[-1]]
  }

  # "label": obj["http://www.w3.org/2000/01/rdf-schema#label"][0]["@value"],
  if "http://www.w3.org/2000/01/rdf-schema#label" in obj:
    item["label"] = obj["http://www.w3.org/2000/01/rdf-schema#label"][0]["@value"]
  else:
    item["label"] = id.split(":")[1]

  fulltexts = [item["label"]]

  #####

  if "http://schema.org/geo" in obj:
    item["geo"] = getGeo(obj, map)

  #####

  count = 0
  if id in freq:
    count = len(freq[id])
  
  item["count"] = str(count).zfill(5)

  #####

  if "http://schema.org/image" in obj:
    item["thumbnail"] = obj["http://schema.org/image"][0]["@id"]

  if "http://schema.org/description" in obj:
    values = []
    for value in obj["http://schema.org/description"]:
      values.append(value["@value"] + "（ウィキペディア より）")
    if len(values) > 0:
      item["description"] = values
      for value in values:
        fulltexts.append(value)

  ''''
  path = "/Users/nakamurasatoru/git/d_kunshujo/kunshujo/static/data/entity/" + id.replace(":", "-") + ".json"
  os.makedirs(os.path.dirname(path), exist_ok=True)
  with open(path, 'w') as outfile:
    json.dump(item, outfile, ensure_ascii=False,
                indent=4, sort_keys=True, separators=(',', ': '))
  '''
  item["fulltext"] = " ".join(fulltexts)

  index.append(item)

with open(f"{APP_DIR}/static/data/entity.json", 'w') as outfile:
    json.dump(index, outfile, ensure_ascii=False,
                indent=4, sort_keys=True, separators=(',', ': '))