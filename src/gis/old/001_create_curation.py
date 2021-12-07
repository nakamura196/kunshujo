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

files = glob.glob("../../docs/curation/*.json")

json_open = open("../../../suikeichuzu/static/data/index.json", 'r')
index = json.load(json_open)

map = {}

for obj in index:
    map[obj["objectID"]] = obj

for file in files:
    
    basename = os.path.basename(file)

    json_open = open(file, 'r')
    curation = json.load(json_open)

    members = curation["selections"][0]["members"]

    members2 = []

    for member in members:
        id = member["metadata"][0]["value"][0]["@id"].split("/")[-1]
        print(id)

        if id in map:
            item = map[id]
            lat = item["latitude"][0]
            if lat != "":
                member["metadata"] = [
                    {
                        "label": "lat",
                        "value" : float(lat)
                    },
                    {
                        "label": "long",
                        "value" : float(item["longitude"][0])
                    }
                ]

                members2.append(member)

    curation["selections"][0]["members"] = members2

    opath = "data/"+basename
    os.makedirs(os.path.dirname(opath), exist_ok=True)

    f2 = open(opath, 'w')
    json.dump(curation, f2, ensure_ascii=False, indent=4,
                sort_keys=True, separators=(',', ': '))