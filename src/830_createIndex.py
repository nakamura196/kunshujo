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
import geohash2
from rdflib import URIRef, BNode, Literal, Graph
from rdflib.namespace import RDF, RDFS, FOAF, XSD
from rdflib import Namespace
import glob
import datetime

m = open("data/data2.json", 'r')
m = json.load(m)

f = open("settings.yml", "r+")
prefix = yaml.load(f, Loader=yaml.SafeLoader)["prefix"]

items = []

map = {}

today = datetime.datetime.now()

ids = []

for item in m:
    label = item["label"]

    values = item["value"]

    if label in ["セット"]:
        pass
    elif label in ["まとめ"]:
        for value in values:
            map[value["dcterms:identifier"]] = value["rdfs:label"]
    else:
        for value in values:

            parent_id = value["schema:isPartOf^^uri"].split("/")[-1]

            objectID = value["dcterms:identifier"]

            manifest = value["schema:url"]
            vol_id = manifest.split("/")[-2]

            if objectID in ids:
                print(objectID)

            ids.append(objectID)

            latlng = value["latlng"]
            spl = latlng.split(",")

            if len(spl) == 1:
                lat = ""
                long = ""
            else:
                lat = spl[0].strip()
                long = spl[1].strip()

            obj = {
                "label" :  value["rdfs:label"],
                "objectID" : objectID,
                # "thumbnail" : value["schema:image"],
                "thumbnail": "https://www.hi.u-tokyo.ac.jp/collection/degitalgallary/ryukyu/data/files/medium/" + objectID + ".jpg",
                "category" : [value["schema:category"].replace("嶋", "島")],
                "図" : [map[parent_id]],
                "member" : value["schema:relatedLink"],
                # "curation" : prefix + "/curation/{}.json".format(parent_id),
                "curation": "https://www.hi.u-tokyo.ac.jp/collection/degitalgallary/ryukyu/data/curation/" + vol_id + ".json",
                "manifest" : value["schema:url"],
                "_updated" : format(today, '%Y-%m-%d'),
                "description" : [value["schema:description"]],
                "番号" : [value["description:番号"]],
                "備考" : [value["description:備考"]],
                "現在の地名" : [value["description:現在の地名"]],
                "リンク" : [value["description:リンク"]],
                "latitude" : [lat],
                "longitude" : [long],
                "jk" : [value["jk"]],
                "latlng" : [latlng],
                "image": "https://www.hi.u-tokyo.ac.jp/collection/degitalgallary/ryukyu/data/files/tile/" + vol_id,
            }

            
            obj["緯度経度"] = ["あり" if lat != "" else "なし"]
            obj["JKリンク"] = ["あり" if value["jk"] != "" else "なし"]

            fulltext = ""

            for key in obj:
                value = obj[key]
                
                if type(value) is list:
                    value = ", ".join(value)

                if "http" in value:
                    continue

                fulltext += ", " + value

            f2 = open("../static/data/item/{}.json".format(obj["objectID"]), 'w')
            json.dump(obj, f2, ensure_ascii=False, indent=4,
                sort_keys=True, separators=(',', ': '))

            obj["fulltext"] = fulltext

            items.append(obj)

# print(len(items))

# print(sorted(ids))

print(len(ids))

f2 = open("../static/data/index.json", 'w')
json.dump(items, f2, ensure_ascii=False, indent=4,
    sort_keys=True, separators=(',', ': '))