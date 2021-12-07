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

Image.MAX_IMAGE_PIXELS = 1000000000

f = open("/Users/nakamurasatoru/git/d_hi_ezu/ryukyu/static/data/index.json", 'r')
index = json.load(f)

map = {
    "0001": "/Users/nakamurasatoru/git/d_hi_ezu/ryukyu_data/docs/files/original/0001.jpg",
    "0002": "/Users/nakamurasatoru/git/d_hi_ezu/ryukyu_data/docs/files/original/0002.jpg",
    "0003": "/Users/nakamurasatoru/git/d_hi_ezu/ryukyu_data/docs/files/original/0003.jpg"
}

images = {}

for key in map:
    print(key)
    images[key] = Image.open(map[key])

# path = "/Users/nakamurasatoru/git/d_hi_ezu/ryukyu_data/docs/files/original/0001.jpg"

for item in index:
    id = item["objectID"]
    print(id)

    opath = "../docs/files/medium/" + id + ".jpg"

    if os.path.exists(opath):
        continue

    thumbnail = item["thumbnail"]

    # https://www.hi.u-tokyo.ac.jp/collection/degitalgallary/ryukyu/data/files/tile/0001/44982,16388,278,334/200,/0/default.jpg

    vol = thumbnail.split("/")[-5]

    xywh = thumbnail.split("/")[-4].split(",")

    x = int(xywh[0])
    y = int(xywh[1])
    w = int(xywh[2])
    h = int(xywh[3])

    path = map[vol]

    # im = Image.open(path)
    im = images[vol]
    im_crop = im.crop((x, y, x+w, y+h))

    w2, h2 = im_crop.size

    width = 200
    height = int(h2 * 200 / w2)

    im_crop = im_crop.resize((width, height))

    im_crop.save(opath)
