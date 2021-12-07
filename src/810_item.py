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

metadata_path = "data/metadata.xlsx"

json_open = open("data/geo.json", 'r')
geo = json.load(json_open)

f = open("settings.yml", "r+")
prefix = yaml.load(f, Loader=yaml.SafeLoader)["prefix"]
import re

def hand(value):
    if pd.isnull(value):
        return ""
    elif value == "？":
        return ""
    else:
        return str(value).strip()

def readExcel(path):
    df = pd.read_excel(path, sheet_name=0, header=None, index_col=None, engine='openpyxl')

    r_count = len(df.index)
    # c_count = len(df.columns)

    map_ = {}

    図 = ""

    for i in range(4, r_count):

        id = df.iloc[i, 7]
        label = df.iloc[i, 9]
        label2 = df.iloc[i, 15]

        if not pd.isnull(label2):
            label = label2

        if pd.isnull(id) and pd.isnull(label):
            print("continue: pd.isnull(id) and pd.isnull(label)", i, id)
            continue

        if pd.isnull(id) and not pd.isnull(label):
            label = str(label).strip()
            図 = label
            print("continue: pd.isnull(id) and not pd.isnull(label)", i, id)
            continue

        id = str(id).replace("\n", "").strip()

        k = {
            "category" : hand(df.iloc[i, 8]),
            "label" : label,
            "description" : hand(df.iloc[i, 10]),
            "備考" : hand(df.iloc[i, 12]),
            "沖縄県教育委員会編『琉球国絵図史料集』第１集の番号" : hand(df.iloc[i, 13]),
            "図" : 図,
            "現在の地名" : hand(df.iloc[i, 6]),
            "リンク" : hand(df.iloc[i, 2]),
            "jk": hand(df.iloc[i, 14]),
            "緯度経度": hand(df.iloc[i, 5]),
        }
        
        map_[str(id)] = k

    return map_

def cleanhtml(raw_html):
  cleanr = re.compile('<.*?>')
  cleantext = re.sub(cleanr, '', raw_html)
  return cleantext

def handleManifest(cn, manifest):
    opath = "data/item/{}/manifest.json".format(cn)
    opath_anno = "data/item/{}/annolist.json".format(cn)

    if not os.path.exists(opath) or True:

        print(manifest)
        m = requests.get(manifest).json()

        f2 = open(opath, 'w')
        json.dump(m, f2, ensure_ascii=False, indent=4,
                sort_keys=True, separators=(',', ': '))
        f2.close()

    m = open(opath, 'r')
    m = json.load(m)

    canvases = m["sequences"][0]["canvases"]

    image = "" 

    for c in canvases:
        anno = c["otherContent"][0]["@id"]
        
        if image == "":
            image = c["images"][0]["resource"]["service"]["@id"]

    if not os.path.exists(opath_anno): # or True:

        resources = []

        canvases = m["sequences"][0]["canvases"]

        for c in canvases:
            anno = c["otherContent"][0]["@id"]
            
            a = requests.get(anno).json()

            for r in a["resources"]:
                resources.append(r)

        f2 = open(opath_anno, 'w')
        json.dump({"resources": resources}, f2, ensure_ascii=False, indent=4,
            sort_keys=True, separators=(',', ': '))
        f2.close()

    json_open = open(opath_anno, 'r')
    annolist = json.load(json_open)

    resources = annolist["resources"]

    annos = []

    for r in resources:
        obj = {
            "canvas": r["on"][0]["full"],
            "xywh": r["on"][0]["selector"]["default"]["value"].split("xywh=")[1]
        }
        for res in r["resource"]:
            type_ = res["@type"]
            value = cleanhtml(res["chars"]).replace("_", "　").strip()
            if type_ == "dctypes:Text":
                obj["label"] = value.replace("&nbsp;", "").replace("\n", "").strip()
            if type_ == "oa:Tag":
                if "loc:" in value:
                    obj["loc"] = value.replace("loc:", "")
                else:
                    obj["tag"] = value

            obj["key"] = obj["loc"] if "loc" in obj else obj["label"]

        annos.append(obj)

    return annos, image, m["label"]

files = glob.glob("data/item/*")

incs = []

for file in files:

    if "bk" in file:
        continue

    cn = file.split("/")[-1]

    settings2 = yaml.load(open("data/item/{}/settings.yml".format(cn), "r+"), Loader=yaml.SafeLoader)

    manifest = settings2["manifest"]

    # image = settings2["image"]

    print("cn", cn)

    annos, image, m_label = handleManifest(cn, manifest)

    thumbnail = "bbb"

    rows = []
    rows.append(["uri", "dcterms:identifier", "", "ID", "rdfs:label", "schema:description","schema:category","description:現在の地名", "description:リンク", "description:備考", "description:番号", "schema:longitude", "schema:latitude", "schema:geo^^uri", "xywh", "schema:url", "canvas", "schema:relatedLink", "schema:image", "schema:isPartOf^^uri", "description:図"])

    hash_id = cn # hashlib.md5(cn.encode()).hexdigest()

    # manifest = prefix + "/iiif/" + hash_id + "/manifest.json"

    manifest = "https://www.hi.u-tokyo.ac.jp/collection/degitalgallary/ryukyu/data" + "/iiif/" + hash_id.replace("shoho-", "") + "/manifest.json"
    print(manifest)

    print("len(annos)", len(annos))

    map_ = readExcel(metadata_path)

    

    for anno in annos:

        label = anno["label"]

        key = anno["key"]

        canvas = anno["canvas"]

        canvas = canvas.replace("https://lab-hi.github.io/map/iiif/1/manifest.json/", "https://www.hi.u-tokyo.ac.jp/collection/degitalgallary/ryukyu/data/iiif/0001/")

        canvas = canvas.replace("https://lab-hi.github.io/map/iiif/3/manifest.json/", "https://www.hi.u-tokyo.ac.jp/collection/degitalgallary/ryukyu/data/iiif/0002/")

        canvas = canvas.replace("https://lab-hi.github.io/map/iiif/2/manifest.json/", "https://www.hi.u-tokyo.ac.jp/collection/degitalgallary/ryukyu/data/iiif/0003/")

        xywh = anno["xywh"]

        xywh2 = xywh.split(",")

        xywh = "{},{},{},{}".format(
            int(xywh2[0]) * 2, 
            int(xywh2[1]) * 2, 
            int(xywh2[2]) * 2, 
            int(xywh2[3]) * 2)

        member = canvas + "#xywh=" + xywh

        category = anno["tag"] if "tag" in anno else ""

        if key in map_:
            obj = map_[key]

            現在の地名 = obj["現在の地名"]
            リンク  = obj["リンク"]
            category  = obj["category"]
            label  = obj["label"]
            description  = obj["description"]
            備考  = obj["備考"]
            番号 = obj["沖縄県教育委員会編『琉球国絵図史料集』第１集の番号"]
            図 = obj["図"]
            
            # 以下、どうするか？
            jk = obj["jk"]
            latlng = obj["緯度経度"]
            

            if リンク in geo:
                g = geo[リンク]
                lat = g["geo"][0]
                long = g["geo"][1]
                geohash = g["hash"]
            else:
                lat = ""
                long = ""
                geohash = ""
            
        else:
            現在の地名 = ""
            リンク = ""
            category = ""
            label = ""
            description = ""

            備考 = ""
            番号 = ""
            図 = ""

            lat = ""
            long = ""
            geohash = ""

            jk = ""
            latlng = ""

        id = key

        image = image.replace("https://iiif.dl.itc.u-tokyo.ac.jp/iiif/tmp/hi/1.tif", "https://www.hi.u-tokyo.ac.jp/collection/degitalgallary/ryukyu/data/files/tile/0001")

        image = image.replace("https://iiif.dl.itc.u-tokyo.ac.jp/iiif/tmp/hi/3.tif", "https://www.hi.u-tokyo.ac.jp/collection/degitalgallary/ryukyu/data/files/tile/0002")

        image = image.replace("https://iiif.dl.itc.u-tokyo.ac.jp/iiif/tmp/hi/2.tif", "https://www.hi.u-tokyo.ac.jp/collection/degitalgallary/ryukyu/data/files/tile/0003")

        thumbnail = image + "/" + xywh + "/200,/0/default.jpg"
        
        rows.append(["http://example.org/data/"+id, id, "", id, label, description, category, 現在の地名, リンク, 備考, 番号, long, lat, geohash, xywh, manifest, canvas, member, thumbnail, "http://example.org/data/"+cn, 図, jk, latlng])

        incs.append(id)
    
    

    with open("data/item/{}/data.csv".format(cn), 'w') as f:
        writer = csv.writer(f)
        writer.writerows(rows)

    parent = "http://example.org/data/W23"

    with open("data/item/{}/row.csv".format(cn), 'w') as f:
        rows = []
        rows.append(["uri", "dcterms:identifier", "rdfs:label", "schema:image", "schema:url", "description:curation", "temporal:label", "schema:temporal", "description:本文", "schema:spatial", "jps:sourceInfo", "jk", "緯度経度"])
        rows.append(["http://example.org/data/" + cn, cn, m_label, thumbnail, manifest, prefix + "/curation/"+cn+".json", "", "", "", "", parent])
        writer = csv.writer(f)
        writer.writerows(rows)