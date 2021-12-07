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
import hashlib

from rdflib import URIRef, BNode, Literal, Graph
from rdflib.namespace import RDF, RDFS, FOAF, XSD
from rdflib import Namespace

import argparse    # 1. argparseをインポート

import glob

json_open = open("../../static/data/index.json", 'r')
index = json.load(json_open)

map = {}

manifests = {}

for item in index:
    manifest = item["manifest"]

    if manifest not in manifests:
        manifests[manifest] = {
            "@type": "sc:Range",
            "label": "",
            "members": [],
            "within": {
                "@id": manifest,
                "@type": "sc:Manifest",
                "label": item["図"][0]
            }
        }

    if item["latitude"][0] == "":
        continue

    member = {
        "@id": item["member"],
        "@type": "sc:Canvas",
        "label": item["label"],
        "metadata": [
            {
                "label": "lat",
                "value": float(item["latitude"][0])
            },
            {
                "label": "long",
                "value": float(item["longitude"][0])
            }
        ]
    }

    manifests[manifest]["members"].append(member)

for manifest in manifests:
    id = manifest.split("/")[-2]

    path = "data/shoho-" + id  + ".json"

    selection = manifests[manifest]

    curation = {
        "@context": [
            "http://iiif.io/api/presentation/2/context.json",
            "http://codh.rois.ac.jp/iiif/curation/1/context.json"
        ],
        "@type": "cr:Curation",
        "label": "",
        "selections": [ selection ],
        "viewingHint": "annotation"
    }

    f2 = open(path, 'w')
    json.dump(curation, f2, ensure_ascii=False, indent=4,
                sort_keys=True, separators=(',', ': '))