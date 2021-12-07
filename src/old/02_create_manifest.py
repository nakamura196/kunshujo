import urllib.request
from bs4 import BeautifulSoup
import csv
from time import sleep
import pandas as pd
import json
import urllib.request
import os
from PIL import Image
import glob

import yaml

# dir = "chukaizuhen/"
# id = "4256313"
# label = "籌海図編１９"
vhint = "right-to-left"

# prefix = "https://hi-ut.github.io/ryukyu_data2"
prefix = "https://www.hi.u-tokyo.ac.jp/collection/degitalgallary/ryukyu/data"

dir = ""
# id = "haedong_jegukgi_2"
# label = "海東諸国紀・琉球国図（結合版）"

confs = [
  {
    "id": "0001",
    "label" : "正保琉球国絵図写"
  },
  {
    "id": "0002",
    "label" : "正保琉球国悪鬼納島絵図写"
  },
  {
    "id": "0003",
    "label" : "正保琉球国八山島絵図写"
  },
  {
    "id": "haedong_jegukgi_2",
    "label" : "海東諸国紀・琉球国図"
  }
]

for conf in confs:

  id = conf["id"]
  label = conf["label"]

  files = glob.glob("../docs/files/tile/{}{}/**/info.json".format(dir, id), recursive=True)

  files = sorted(files)

  canvases = []

  for i in range(len(files)):
      file = files[i]

      index = i + 1

      print(file)

      with open(file) as f:
          df = json.load(f)

          th_width = df["sizes"][0]["width"]
          th_height = df["sizes"][0]["height"]

          image_id = df["@id"].replace("https://hi-ut.github.io/ryukyu_data2", "https://www.hi.u-tokyo.ac.jp/collection/degitalgallary/ryukyu/data")

          canvas = {
            "label": "[{}]".format(index),
            "width": df["width"],
            "height": df["height"],
            "@type": "sc:Canvas",
            "@id": prefix + "/iiif/{}/canvas/p{}".format(id, index),
            "images": [
              {
                "@type": "oa:Annotation",
                "on": prefix + "/iiif/{}/canvas/p{}".format(id, index),
                "motivation": "sc:painting",
                "resource": {
                  "@type": "dctypes:Image",
                  "format": "image/jpeg",
                  "width": df["width"],
                  "height": df["height"],
                  "@id": image_id + "/full/full/0/default.jpg",
                  "service": {
                    "@context": "http://iiif.io/api/image/2/context.json",
                    "@id": image_id,
                    "profile": "http://iiif.io/api/image/2/level0.json"
                  }
                }
              }
            ],
            "thumbnail": {
              "@id": image_id + "/full/{},/0/default.jpg".format(th_width),
              "@type": "dctypes:Image",
              "format": "image/jpeg",
              "width": th_width,
              "height": th_height
            }
          }

          canvases.append(canvas)

  manifest = {
    "label": label,
    "@id": prefix + "/iiif/{}/manifest.json".format(id),
    "@type": "sc:Manifest",
    "@context": "http://iiif.io/api/presentation/2/context.json",
    "metadata": [],
    "within": "https://www.hi.u-tokyo.ac.jp/collection/degitalgallary/ryukyu/",
    "logo": "https://www.hi.u-tokyo.ac.jp/icon.png",
    "viewingDirection": vhint,
    "license": "https://www.hi.u-tokyo.ac.jp/faq/reuse",
    "sequences": [
      {
        "@type": "sc:Sequence",
        "label": "Current Page Order",
        "@id": prefix + "/iiif/{}/sequence/normal".format(id),
        "canvases": canvases
      }
    ]
  }

  path = "../docs/iiif/{}{}/manifest.json".format(dir, id)

  os.makedirs(os.path.dirname(path), exist_ok=True)

  fw = open(path, 'w')
  json.dump(manifest, fw, ensure_ascii=False, indent=4, sort_keys=True, separators=(',', ': '))