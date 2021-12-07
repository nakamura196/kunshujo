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

import pyproj
import csv

import warnings
warnings.simplefilter('ignore')

wgs84=pyproj.CRS("EPSG:4326")
jgd2011_9 = pyproj.CRS("EPSG:3857")

files = glob.glob("item/*/data.csv")

thres = 5000

for file in files:

    print("対象", file)

    rows = []
    rows.append(["mapX","mapY","pixelX","pixelY"])

    m_path = file.replace("data.csv", "manifest.json")

    m = open(m_path, 'r')
    m = json.load(m)

    canvas = m["sequences"][0]["canvases"][0]

    width = canvas["width"]
    height = canvas["height"]

    print("最大幅", max(width, height))

    r  = thres / max(width, height)

    if r > 1:
        r = 1

    print("比率", r)

    ##########

    values = []

    with open(file) as f:
        reader = csv.reader(f)
        header = next(reader)
        for row in reader:

            xywh = row[14].split(",")

            x = int(int(xywh[0]) + int(xywh[2]) / 2)
            y = int(int(xywh[1]) + int(xywh[3]) / 2)

            # x = int(int(xywh[0]))
            # y = int(int(xywh[1]))

            x = int(x * r)
            y = int(y * r)

            lat = row[12]
            lon = row[11]

            if lat != "":
                lat = float(lat)
                lon = float(lon)

                loc2 = pyproj.transform(wgs84, jgd2011_9, lat, lon)

                # print(lat, lon, loc2[0], loc2[1], row[1], row[4])

                row = [loc2[0], loc2[1], x, -1 * y]
                rows.append(row)
            
    with open(file.replace("data.csv", 'gcp.points'), 'w') as f:
        writer = csv.writer(f, lineterminator='\n') # 改行コード（\n）を指定しておく
        writer.writerows(rows) # 2次元配列も書き込める