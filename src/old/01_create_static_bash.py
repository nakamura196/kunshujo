import urllib.request
from bs4 import BeautifulSoup
import csv
from time import sleep
import pandas as pd
import json
import urllib.request
import os
from PIL import Image
import glob

import yaml

prefix = "https://hi-ut.github.io/ryukyu_data2"

dir = "/Users/nakamurasatoru/git/d_hi_ezu/ryukyu_data"

# dir = "C:\\Users\\na_ka\\git\\ryukyu_data2"

# dir = "../docs/files/original"

tile = "1024"

f = open('tmp/convert.sh', 'w')
writer = csv.writer(f, lineterminator='\n')


files = glob.glob(dir+'/docs/files/original/**/*', recursive=True)


for i in range(len(files)):

    file = files[i]

    if not os.path.isfile(file):
        continue

    opath = file.replace("/original/", "/tile/")
    tmp = os.path.split(opath)
    odir = tmp[0]

    root, ext = os.path.splitext(opath)

    info_path = opath.replace(ext, "/info.json")

    if not os.path.exists(info_path):
        print(info_path)

        # os.makedirs(odir, exist_ok=True)

        line = "echo "+str(i+1)+"/"+str(len(files))
        writer.writerow([line])

        line = "mkdir -p "+odir
        writer.writerow([line])

        p = odir.replace(dir+"/docs", prefix)

        line = "python iiif_static/iiif_static.py  -d "+odir+" -t "+str(tile)+"  -p "+p+" "+file
        writer.writerow([line])
    

f.close()
