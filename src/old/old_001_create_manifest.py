import pandas as pd
import hashlib
import json
import requests
import os
from PIL import Image
import datetime



params = []


params.append({
  "id" : "haedong_jegukgi",
  "label" : "海東諸国紀",
  "pages" : [1, 161],
  "p" : "https://clioimg.hi.u-tokyo.ac.jp/viewer/api/image/idata/000/_000ki_23/2/00000{}.tif"
})
'''

params.append({
  "id" : "0M0-_103ha_-185",
  "label" : "琉球諸島図",
  "pages" : [1, 11],
  "p" : "https://clioimg.hi.u-tokyo.ac.jp/viewer/api/image/idata/0M0/_103ha_/185/00000{}.tif"
})

params.append({
  "id" : "T60-_15_10",
  "label" : "大琉球那覇港之図",
  "pages" : [1, 4],
  "p" : "https://clioimg.hi.u-tokyo.ac.jp/viewer/api/image/idata/T60/15/10/00000{}.tif"
})

params.append({
  "id" : "T60-_15_26",
  "label" : "Tung-Hai or Eastern Sea, The Islands between Formosa and Japan with the Adjacent coast of China",
  "pages" : [1, 7],
  "p" : "https://clioimg.hi.u-tokyo.ac.jp/viewer/api/image/idata/T60/15/26/00000{}.tif"
})

params.append({
  "id" : "T60-_15_46",
  "label" : "日本南西諸島先島群島",
  "pages" : [1, 7],
  "p" : "https://clioimg.hi.u-tokyo.ac.jp/viewer/api/image/idata/T60/15/46/00000{}.tif"
})
'''

for para in params:

  canvases = []

  id = para["id"]
  label = para["label"]
  pages = para["pages"]
  p = para["p"]

  prefix2 = "https://hi-ut.github.io/ryukyu_data2/iiif/" + id

  for i in range(pages[0], pages[1]):

      print(i)

      prefix = p.format(str(i).zfill(3))
      info = prefix + "/info.json"

      df = requests.get(info).json()

      h = df["height"]
      w = df["width"]

      canvas = {
          "@id": prefix2 + "/canvas/p{}".format(i),
            "@type": "sc:Canvas",
            "height": h,
            "images": [
              {
                "@id": prefix2 + "/annotation/p{}-image".format(i),
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "on": prefix2 + "/canvas/p{}".format(i),
                "resource": {
                  "@id": prefix + "/full/full/0/default.jpg",
                  "@type": "dctypes:Image",
                  "format": "image/jpeg",
                  "height": h,
                  "service": {
                    "@context": "http://iiif.io/api/image/2/context.json",
                    "@id": prefix,
                    "profile": "http://iiif.io/api/image/2/level1.json"
                  },
                  "width": w
                }
              }
            ],
            "label": "[{}]".format(i),
            "thumbnail": {
              "@id": prefix + "/full/200,/0/default.jpg"
            },
            "width": w
          }

      canvases.append(canvas)

  manifest = {
      "@context": "http://iiif.io/api/presentation/2/context.json",
      "@id": prefix2 + "/manifest.json",
      "@type": "sc:Manifest",
      "attribution": "東京大学史料編纂所",
      "label": label,
      "license": "https://www.hi.u-tokyo.ac.jp/faq/reuse_cc-by.html",
      "sequences" : [
          {
              "@id": prefix2 + "/sequence.json",
              "@type": "sc:Sequence",
              "canvases" : canvases
          }
      ],
      "metadata": [
          {
              "label": "Source",
              "value": "https://lab-hi.github.io/map/iiif/1/manifest.json"
          }
      ],
      "viewingDirection": "right-to-left"
  }

  path  = "../docs/iiif/" + id + "/manifest.json"

  os.makedirs(os.path.dirname(path), exist_ok=True)

  with open(path, 'w') as outfile:
      json.dump(manifest, outfile, ensure_ascii=False,
              indent=4, sort_keys=True, separators=(',', ': '))