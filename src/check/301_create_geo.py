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
sys.path.append('/Users/nakamurasatoru/git/classes')
from rdf import Rdf as rdf

import requests
from bs4 import BeautifulSoup

import sys
import urllib.request

import urllib.parse

# リダイレクトしないハンドラークラス
class NoRedirectHandler(urllib.request.HTTPRedirectHandler):
  # HTTPRedirectHandler.redirect_request をオーバーライド
  def redirect_request(self, req, fp, code, msg, hdrs, newurl):
    self.newurl = newurl # リダイレクト先URLを保持
    return None

# リダイレクト先 URL を取得する関数
def get_redirect_url(src_url):
  # リダイレクトしないハンドラーをセット
  no_redirect_handler = NoRedirectHandler()
  opener = urllib.request.build_opener(no_redirect_handler)
  try:
    with opener.open(src_url) as res:
      return None # リダイレクトしない URL だった
  except urllib.error.HTTPError as e:
    if hasattr(no_redirect_handler, "newurl"):
      return no_redirect_handler.newurl # リダイレクト先 URL を返す
    else:
      raise e # リダイレクト以外で発生した例外なので投げ直す

path = "data/改訂版　正保琉球国絵図アノテーション作業用_2.xlsx"

f = open("../settings.yml", "r+")
prefix = yaml.load(f, Loader=yaml.SafeLoader)["prefix"]

df = pd.read_excel(path, sheet_name=0, header=None, index_col=None, engine='openpyxl')

r_count = len(df.index)
c_count = len(df.columns)

google_index = 1

json_open = open("data/gm.json", 'r')
gm = json.load(json_open)

map = {}

def handle_url(url):
    

    try:
        r_url = get_redirect_url(url)
    except Exception as e:
        print("** gm error 1", url)
        return None
    
    try:
        text = urllib.parse.unquote(r_url)
    except Exception as e:
        print("** gm error 2", url)
        return None

    tmp = text.split("/")[5]
    name = ""

    if "N" not in tmp:
        if "+" in tmp:
            tmp = tmp.split("+")[1]
        name = tmp

    spl = text.split("!3d")[1].split("?")[0].split("!4d")

    lat = float(spl[0])
    long = float(spl[1].split("!")[0])

    res = {
        "lat" : lat,
        "long" : long,
        "r_url": r_url,
        "text" : text
    }

    if name != "":
        res["label"] = name

    return res



for i in range(6, r_count):

    google_url = df.iloc[i, google_index]

    if i % 50 == 0:
        print(i+1, r_count, google_url)

    if pd.isnull(google_url):
        continue
    
    init = df.iloc[i, 0]
    if not pd.isnull(init) and "私見" in str(init):
        df.iloc[i, google_index + 2] = "私見"

    if "goo.gl" in google_url:

        google_url = google_url.replace("　",  " ").split(" ")[0]

        if google_url not in gm:
            res = handle_url(google_url)

            if not res:
                print(i, "GM Error")
                continue

            

            lat = res["lat"]
            long = res["long"]

            uri = prefix + "/api/place/" + google_url.split("/")[-1]
            label = df.iloc[i, google_index - 1]

            geohash = rdf.geohash(lat, long)

            item = {
                "uri" : uri,
                "label" : label,
                "geo" : [lat, long],
                "hash" : geohash,
                "lat" : lat,
                "long" : long
            }

            gm[google_url] = item

            if "label" in res:
                item["name"] = res["label"]

        #####

        res = gm[google_url]

        lat = res["lat"]
        long = res["long"]

        df.iloc[i, google_index + 1] = google_url

        # 地名
        if "name" in res:
            df.iloc[i, google_index + 3] = res["name"]

        # 緯度経度
        value = "{},{}".format(lat, long)
        df.iloc[i, google_index +4] = value

    elif "maps.gsi.go.jp" in google_url:
        df.iloc[i, google_index + 1] = google_url

        spl = google_url.split("/")
        lat = spl[4]
        long = spl[5]
        value = "{},{}".format(lat, long)
        df.iloc[i, google_index +4] = value
    elif google_url not in ["？", "?", "GPS化困難", "（GM・地理院、記載なし）"]:
        print(i, "*****", google_url)

        spl = google_url.split(",")
        lat = spl[0].strip()
        long = spl[1].strip()
        value = "{},{}".format(lat, long)
        df.iloc[i, google_index +4] = value
        

df.to_excel('data/301.xlsx', index=False, header=False)

f2 = open("data/gm.json", 'w')
json.dump(gm, f2, ensure_ascii=False, indent=4,
            sort_keys=True, separators=(',', ': '))