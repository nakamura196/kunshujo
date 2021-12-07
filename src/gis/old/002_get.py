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
import math
from rdflib import URIRef, BNode, Literal, Graph
from rdflib.namespace import RDF, RDFS, FOAF, XSD
from rdflib import Namespace

import pyproj
import csv 

wgs84=pyproj.CRS("EPSG:4326")
jgd2011_9 = pyproj.CRS("EPSG:3857")

import argparse    # 1. argparseをインポート

import glob

import requests
import shutil

configs = [
    {
        "path": "data/shoho-0001.json",
        "canvas": "",
        "xywh": "3340,9406,1952,1312",
        "id": "0001-0005"
    },
    {
        "path": "data/shoho-0001.json",
        "canvas": "",
        "xywh": "3704,6526,3412,1992",
        "id": "0001-0004"
    },
    {
        "path": "data/shoho-0003.json",
        "canvas": "",
        "xywh": "608,1203,2464,1728",
        "id": "0003-0001"
    },
    {
        "path": "data/shoho-0001.json",
        "canvas": "",
        "xywh": "6896,3288,3904,4149"
    },
    {
        "path": "data/shoho-0002.json",
        "canvas": "",
        "xywh": "4832,6058,14736,5830",
        "id": "0002-0001"
    }
]

config = configs[0]

path = config["path"]
canvas = config["canvas"]
xywh = config["xywh"]
id = config["id"]


#####

def download_img(url, file_name):
    r = requests.get(url, stream=True)
    if r.status_code == 200:
        with open(file_name, 'wb') as f:
            r.raw.decode_content = True
            shutil.copyfileobj(r.raw, f)



basename = os.path.basename(path)

xywhs = xywh.split(",")



x = int(xywhs[0])
y = int(xywhs[1])
w = int(xywhs[2])
h = int(xywhs[3])

max_size = 8000

l = max(w, h)

r = 1 if max_size > l else max_size / l

json_open = open(path)
curation = json.load(json_open)

manifest = curation["selections"][0]["within"]["@id"]

m = requests.get(manifest).json()

api = m["sequences"][0]["canvases"][0]["images"][0]["resource"]["service"]["@id"]

url = api + "/" + xywh + "/full/0/default.jpg"

rows = []
rows.append(["mapX","mapY","pixelX","pixelY","enable","dX","dY","residual"])

for member in curation["selections"][0]["members"]:
    metadata = member["metadata"]

    lat = -1
    lon = -1

    for obj in metadata:
        label = obj["label"]
        value = obj["value"]

        if label == "lat":
            lat = value

        elif label == "long":
            lon = value

    if lat != -1 and lon != -1:        

        member_xywh = member["@id"].split("#xywh=")[1]
        m_xywhs = member_xywh.split(",")

        mx = int(m_xywhs[0])
        my = int(m_xywhs[1])
        mw = int(m_xywhs[2])
        mh = int(m_xywhs[3])

        mx2 = mx + 1/2 * mw
        my2 = my + 1/2 * mh

        if x < mx2 and mx2 < x + w and y < my2 and my2 < y + h:

            res = pyproj.transform(wgs84, jgd2011_9, lat, lon)

            lat2 = res[0]
            lon2 = res[1]

            pixelX = int(mx2 - x)
            pixelY = -1 * int(my2 - y)

            # r = 1

            rows.append([lat2, lon2, pixelX * r, pixelY * r, 1, "", "", ""])

opath = "output/"+ id + "/img.jpg"
os.makedirs(os.path.dirname(opath), exist_ok=True)

if not os.path.exists(opath):
    download_img(url, opath)

with open("output/"+ id + "/data.points", 'w') as f:
    writer = csv.writer(f, lineterminator='\n') # 改行コード（\n）を指定しておく
    writer.writerows(rows) # 2次元配列も書き込める

lines = [
    "gdal_translate -mask 4 img_modified.tif trans.tif\n",
    "gdal2tiles.py trans.tif {} -z0-16 --xyz --processes=1".format(id)
]

f = open("output/"+ id + "/b.sh", 'w') # 書き込みモードで開く
f.writelines(lines) # シーケンスが引数。
f.close()
