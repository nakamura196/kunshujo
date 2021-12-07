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

def download_img(url, file_name):
    r = requests.get(url, stream=True)
    if r.status_code == 200:
        with open(file_name, 'wb') as f:
            r.raw.decode_content = True
            shutil.copyfileobj(r.raw, f)

url = "https://script.google.com/macros/s/AKfycbyYXKu5OlHiDuVnr3z05EVjjDS-FHKolyfpEg0jROK-q-OAU0s2oJQuJpfOfyOJCbVo/exec?sheet=石高分析"

prefix = "https://hi-ut.github.io/ryukyu_data2"

df = requests.get(url).json()

map = {}

ranges = []

for item in df:
  if item["min"] != "":
    ranges.append({
      "min" : item["min"],
      "max" : item["max"],
      "color" : item["color"]
    })


for item in df:
  '''
  count = item["石高"]

  for range in ranges:
    if range["min"] < count and count < range["max"]:
      item["color"]
  '''
  map[item["ID"]] = item

files = glob.glob("../docs/curation_m/org/*.json")

selections = []

for file in files:
  with open(file) as f:
    df = json.load(f)

    selection = df["selections"][0]
    selections.append(selection)

    members = []

    for member in selection["members"]:
      id = member["metadata"][0]["value"][0]["@id"].split("/")[-1]
      if id in map:
        members.append(member)

        resource = member["metadata"][0]["value"][0]["resource"]

        conf = map[id]

        color = conf[""].replace("#", "")

        path = "../docs/assets/img/{}.png".format(color)

        if not os.path.exists(path):

          marker = "https://cdn.mapmarker.io/api/v1/pin?size=25&background=%23{}&voffset=0&hoffset=1#xy=12,22".format(color)

          download_img(marker, path)

        url = prefix + "/assets/img/{}.png".format(color)

        resource["marker"]["@id"] = url
        resource["chars"] = '<a href=\"https://hi-ut.github.io/ryukyu/item/{}\">{}</a><br/>{}（{}）'.format(id, conf["正保国絵図"], conf["説明文"], conf["石高"])

    selection["members"] = members

    basename = os.path.basename(file)

    curation = {
      "@context": [
          "http://iiif.io/api/presentation/2/context.json",
          "http://codh.rois.ac.jp/iiif/curation/1/context.json"
      ],
      "@id": prefix + "/curation/kokudaka/" + basename,
      "@type": "cr:Curation",
      "label": "",
      "selections": [selection],
      "viewingHint": "annotation"
    }

    with open("../docs/curation/kokudaka/" + basename, 'w') as outfile:
        json.dump(curation, outfile, ensure_ascii=False,
                indent=4, sort_keys=True, separators=(',', ': '))

curation = {
  "@context": [
      "http://iiif.io/api/presentation/2/context.json",
      "http://codh.rois.ac.jp/iiif/curation/1/context.json"
  ],
  "@id": prefix + "/curation/test.json",
  "@type": "cr:Curation",
  "label": "",
  "selections": selections,
  "viewingHint": "annotation"
}

with open("../docs/curation/test.json", 'w') as outfile:
    json.dump(curation, outfile, ensure_ascii=False,
            indent=4, sort_keys=True, separators=(',', ': '))