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

from openpyxl import Workbook, load_workbook
from openpyxl.styles import Font
import openpyxl
import datetime

f = open("../static/data/index.json", 'r')
index = json.load(f)

x0 = 11111111
y0 = 11111111
x1 = 0
y1 = 0

for item in index:
    latitude = item["latitude"][0]

    if latitude != "":
        latitude = float(latitude)
        longitude = float(item["longitude"][0])

        if latitude < x0:
            x0 = latitude

        if longitude < y0:
            y0 = longitude

        if latitude > x1:
            x1 = latitude

        if longitude > y1:
            y1 = longitude


today = format(datetime.datetime.now())

res = {
    '@context': 'https://schema.org/',
    '@type': 'Dataset',
    'name': '正保琉球国絵図・地名辞書',
    'keywords': ['琉球', '地名辞書'],
    'alternateName': '',
    'description': '東京大学史料編纂所の正保琉球国絵図デジタルアーカイブの地名をまとめて利用するためのデータセットを公開しています。',
    'url': 'https://www.hi.u-tokyo.ac.jp/collection/degitalgallary/ryukyu/dictionary/',
    'distribution': [
      {
        '@type': 'DataDownload',
        'contentUrl': 'https://www.hi.u-tokyo.ac.jp/collection/degitalgallary/ryukyu/data/metadata/top.csv',
        'encodingFormat': 'text/csv',
      },
    ],
    'identifier': ['geonlp:hi-ryukyu'],
    'dateModified': today, # '2021-09-15T23:01:12+09:00',
    'license': 'https://creativecommons.org/licenses/by/4.0/',
    'size': len(index),
    'temporalCoverage': '../..',
    'creator': [
      {
        'name': '東京大学史料編纂所',
        '@type': 'Organization',
        'sameAs': 'https://www.hi.u-tokyo.ac.jp/',
      },
    ],
    'isBasedOn': {
      '@type': 'CreativeWork',
      'name': '正保琉球国絵図デジタルアーカイブ',
      'url': 'https://www.hi.u-tokyo.ac.jp/collection/degitalgallary/ryukyu/',
    },
    'spatialCoverage': {
      '@type': 'Place',
      'geo': {
        '@type': 'GeoShape',
        'box': '{} {} {} {}'.format(x0, y0, x1, y1),
      },
    },
  }

f2 = open("data/metaTag.json", 'w')
json.dump(res, f2, ensure_ascii=False, indent=4,
            sort_keys=True, separators=(',', ': '))