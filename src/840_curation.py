import urllib.request
from bs4 import BeautifulSoup
import csv
from time import sleep
import pandas as pd
import json
import urllib.request
import os
from PIL import Image
import yaml
import requests
import sys
import argparse


# all = Graph()

###########

f = open("../static/data/index.json", 'r')
index = json.load(f)

map = {}

for item in index:
    id = item["objectID"]
    print(id)

    manifest = item["manifest"]

    pic = item["図"][0]

    if manifest not in map:
        map[manifest] = {
            "members": {},
            "label" : pic, # row["parent:label"],
            # "uri": row["schema:isPartOf^^uri"]
        }

    members = map[manifest]["members"]

    category = item["category"][0]

    marker = "https://www.hi.u-tokyo.ac.jp/collection/degitalgallary/ryukyu/data/files/legend/" + category + ".png"

    member_id = item["member"]

    label = item["label"]

    prefix2 = "https://www.hi.u-tokyo.ac.jp/collection/degitalgallary/ryukyu"
    url = prefix2 + "/item/" + item["objectID"]

    metadata = [
        {
            "label": "Annotation",
            "value": [
                {
                    "@id": member_id, # url,
                    "@type": "oa:Annotation",
                    "motivation": "sc:painting",
                    "on": member_id,
                    "resource": {
                        "@type": "cnt:ContentAsText",
                        "chars": '''地名：<a href=\"{}\">{}</a><br/>分類：{}'''.format(url, label, category),
                        "format": "text/html",
                        "marker": {
                        "@id": marker + "#xy=12,22",
                        "@type": "dctypes:Image"
                        }
                    }
                }
            ]
        }
    ]

    

    metadata.append({
        "label" : "図",
        "value" : pic
    })

    metadata.append({
        "label" : "category",
        "value" : category
    })

    member = {

        "@id": member_id,
        "@type": "sc:Canvas",
        "label": label,
        "metadata": metadata

    }

    members[id]  = member

selections2 = []

for manifest in sorted(map):
    selections = []
    item = map[manifest]

    label = item["label"]

    membersMap = item["members"]

    members = []

    for id in sorted(membersMap):
        members.append(membersMap[id])

    selections.append({
        "@id": manifest + "/range",
        "@type": "sc:Range",
        "label": label,
        "members": item["members"],
        "within": {
            "@id": manifest,
            "@type": "sc:Manifest",
            "label": label
        }
    })

    selections2.append({
        "@id": manifest + "/range",
        "@type": "sc:Range",
        "label": label,
        "members": item["members"],
        "within": {
            "@id": manifest,
            "@type": "sc:Manifest",
            "label": label
        }
    })

    # id = item["uri"].split("/")[-1]
    id = manifest.split("/")[-2]

    prefix = "https://www.hi.u-tokyo.ac.jp/collection/degitalgallary/ryukyu/data"

    curation = {
        "@context": [
            "http://iiif.io/api/presentation/2/context.json",
            "http://codh.rois.ac.jp/iiif/curation/1/context.json"
        ],
        "@id": prefix + "/curation/" + id + ".json",
        "@type": "cr:Curation",
        "label": label,
        "selections": selections,
        "viewingHint": "annotation"
    }

prefix = "https://www.hi.u-tokyo.ac.jp/collection/degitalgallary/ryukyu/data"

label = "正保琉球国絵図デジタルアーカイブ"

curation = {
    "@context": [
        "http://iiif.io/api/presentation/2/context.json",
        "http://codh.rois.ac.jp/iiif/curation/1/context.json"
    ],
    "@id": prefix + "/curation/top.json",
    "@type": "cr:Curation",
    "label": label,
    "selections": selections2,
    "viewingHint": "annotation"
}

f2 = open("../static/data/curation/top.json", 'w')
json.dump(curation, f2, ensure_ascii=False, indent=4,
        sort_keys=True, separators=(',', ': '))
