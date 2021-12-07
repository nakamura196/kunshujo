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

path = "data/改訂版　正保琉球国絵図アノテーション作業用.xlsx"

f = open("../settings.yml", "r+")
prefix = yaml.load(f, Loader=yaml.SafeLoader)["prefix"]

df = pd.read_excel(path, sheet_name=0, header=None, index_col=None, engine='openpyxl')

r_count = len(df.index)
c_count = len(df.columns)

google_index = 1


map = {}

for i in range(6, r_count):

    

    google_url = df.iloc[i, google_index]

    print(i+1, r_count, google_url)

    if pd.isnull(google_url):
        continue

    if "goo" not in google_url:
        continue

    try:
        r_url = get_redirect_url(google_url)
    except Exception as e:
        print(e)
        continue
    
    try:
        text = urllib.parse.unquote(r_url)
    except Exception as e:
        print(e)
        continue

    if google_url in map:
        continue

    # map[]

    print(text)

    spl = text.split("!3d")[1].split("?")[0].split("!4d")


    lat = float(spl[0])
    long = float(spl[1])

    # if google_url in map:
    uri = prefix + "/api/place/" + google_url.split("/")[-1]
    label = df.iloc[i, google_index - 1]

    geohash = rdf.geohash(lat, long)

    map[google_url] = {
        "uri" : uri,
        "label" : label,
        "geo" : [lat, long],
        "hash" : geohash
    }

f2 = open("data/geo.json", 'w')
json.dump(map, f2, ensure_ascii=False, indent=4,
            sort_keys=True, separators=(',', ': '))