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



import argparse    # 1. argparseをインポート

import glob

import requests
import shutil

json_open = open("conf.json")
area = json.load(json_open)

output2 = {
    '0001-0001': {
        "id": '0001-0001',
        "label": '大嶋',
        "area":
        '[[28.083392707218582, 129.80452943358483], [28.638415181765282, 129.11418142126035]]',
    }
}

output = {}

for name in area:

    id = area[name]

    dir = "output/{}/{}".format(id, id)

    if os.path.exists(dir):
        odir = "/Users/nakamurasatoru/git/d_hi_ezu/okinawa/test/docs/{}".format(id)
        if not os.path.exists(odir):
            shutil.copytree(dir, odir)

        f = open(dir + "/leaflet.html", 'r')
        data = f.read()

        bounds = data.split("map.fitBounds(")[1].split(")")[0]

        print(id)

        output[id] = {
            "id": id,
            "label": name,
            "area": bounds
        }

        f.close()

with open("output.json", mode='wt', encoding='utf-8') as file:
    json.dump(output, file, ensure_ascii=False, indent=2)