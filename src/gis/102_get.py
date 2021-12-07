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
import warnings
warnings.filterwarnings('ignore')
import argparse    # 1. argparseをインポート
import glob
import requests
import shutil

max_size = 8000

wgs84=pyproj.CRS("EPSG:4326")
jgd2011_9 = pyproj.CRS("EPSG:3857")

Image.MAX_IMAGE_PIXELS = 1000000000

map = {
    "0001": "/Users/nakamurasatoru/git/d_hi_ezu/ryukyu_data/docs/files/original/0001.jpg",
    "0002": "/Users/nakamurasatoru/git/d_hi_ezu/ryukyu_data/docs/files/original/0002.jpg",
    "0003": "/Users/nakamurasatoru/git/d_hi_ezu/ryukyu_data/docs/files/original/0003.jpg"
}

images = {}

for key in map:
    print(key)
    images[key] = Image.open(map[key])

#####

def download_img(url, file_name):
    r = requests.get(url, stream=True)
    if r.status_code == 200:
        with open(file_name, 'wb') as f:
            r.raw.decode_content = True
            shutil.copyfileobj(r.raw, f)

#####

def create_img(did, xywh, file_name):
    spl = xywh.split(",")
    x = int(spl[0])
    y = int(spl[1])
    w = int(spl[2])
    h = int(spl[3])
    im = images[did]
    im_crop = im.crop((x, y, x+w, y+h))

    l = max(w, h)

    r = 1 if max_size > l else max_size / l

    im_crop = im_crop.resize((int(w * r), int(h * r)))

    im_crop.save(file_name)

def main(index):

    config = configs[index]

    path = config["path"]
    # canvas = config["canvas"]
    xywh = config["xywh"]
    id = config["id"]

    # basename = os.path.basename(path)

    xywhs = xywh.split(",")

    x = int(xywhs[0])
    y = int(xywhs[1])
    w = int(xywhs[2])
    h = int(xywhs[3])

    

    l = max(w, h)

    r = 1 if max_size > l else max_size / l

    json_open = open(path)
    curation = json.load(json_open)

    manifest = curation["selections"][0]["within"]["@id"]

    m = requests.get(manifest).json()

    # api = m["sequences"][0]["canvases"][0]["images"][0]["resource"]["service"]["@id"]

    # url = api + "/" + xywh + "/full/0/default.jpg"

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
        create_img(config["did"], xywh, opath)
    

    with open("output/"+ id + "/data.points", 'w') as f:
        writer = csv.writer(f, lineterminator='\n') # 改行コード（\n）を指定しておく
        writer.writerows(rows) # 2次元配列も書き込める

    gcps = []

    for row in rows[1:]:
        gcps.append("-gcp {} {} {} {}".format(row[2], -1 * row[3], '{:.6g}'.format(float(row[0])), '{:.6g}'.format(float(row[1]))))

    line1 = "gdal_translate -of GTiff " + " ".join(gcps) + " img.jpg tmp.jpg"

    lines = [
        "rm -rf img_modified.tif\n",
        "rm -rf {}\n".format(id),
        line1+"\n",
        "gdalwarp -r near -order 1 -co COMPRESS=LZW -dstalpha -t_srs EPSG:3857 tmp.jpg img_modified.tif\n"
        "gdal_translate -mask 4 img_modified.tif trans.tif\n",
        "gdal2tiles.py trans.tif {} -z0-14 --xyz --processes=1".format(id)
    ]

    f = open("output/"+ id + "/b.sh", 'w') # 書き込みモードで開く
    f.writelines(lines) # シーケンスが引数。
    f.close()


json_open = open("area.json")
area = json.load(json_open)

selections = area["selections"]

configs = []

json_open = open("conf.json")
names = json.load(json_open)

for selection in selections:
    members = selection["members"]

    for member in members:
        id = member["@id"]
        metadata = member["metadata"]

        did = id.split("/")[-3]

        name = ""

        for m in metadata:
            if m["label"] == "島":
                name = m["value"]

        # print(name)

        xywh = id.split("#xywh=")[1]

        name = names[name]

        config = {
            "path": "data/shoho-"+did+".json",
            "canvas": "",
            "xywh": xywh,
            "id": name,
            "did": did
        }
        configs.append(config)

for i in range(len(configs)):
    

    conf = configs[i]

    if conf["id"] != "0002-0002":
        # continue
        pass

    print(conf["id"])

    main(i)

'''
configs2 = [
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
'''

