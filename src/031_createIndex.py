import pandas as pd
import urllib.parse
import json
import copy
import os
import hashlib
import datetime
import itertools
today = datetime.datetime.now()

import shutil

def getUris():
    path = "data/structured.json"

    with open(path) as f:
        st = json.load(f)

    map = {}
    
    for key in st:
        values = []
        values2 = st[key]
        for value in values2:
            values.append(value["uri"])
        map[key] = values

    return map


uris = getUris()

path = "/Users/nakamurasatoru/git/d_omeka/omekac_dd/docs/curation/mod.json"

with open(path) as f:
    st = json.load(f)

path = "data/reps.json"

with open(path) as f:
    reps = json.load(f)

index = []

selections = st["selections"]

'''
item_dir = "/Users/nakamurasatoru/git/d_kunshujo/kunshujo/static/data/item"
if os.path.exists(item_dir):
  shutil.rmtree(item_dir)
  os.makedirs(item_dir)
'''

freq = {}

edges = {}

sims = {}

ops = ["Packaged goods"]

for selection in selections:
  members = selection["members"]

  manifest = selection["within"]["@id"]
  label = selection["within"]["label"]

  for member in members:

    member_id = member["@id"]

    id = hashlib.md5(member_id.encode('utf-8')).hexdigest()

    metadata = member["metadata"]

    tags = []
    mtags = []

    agentials = []
    places = []
    times = []
    keywords = []
    orgs = []

    color = []

    entityIds = []

    for m in metadata:
        label = m["label"]
        values = m["value"]
        if type(values) is not list:
            values = [values]
        

        if label == "タグ":
            for value in values:
              tags.append(value)

              if value in uris:
                  ids = uris[value]
                  for uri in ids:
                    # 正規化された値に変更
                    if uri in reps:
                        uri = reps[uri]
                    value2_sp = uri.split(":")
                    prefix = value2_sp[0]
                    value3 = uri # value2_sp[1]

                    if uri not in freq:
                        freq[uri] = []

                    if id not in freq[uri]:
                        freq[uri].append(id)

                    if prefix == "chname":
                        agentials.append(value3)
                    elif prefix == "keyword":
                        keywords.append(value3)
                    elif prefix == "place":
                        places.append(value3)
                    elif prefix == "time":
                        times.append(value3)
                    elif prefix == "org":
                        orgs.append(value3)

                    if uri not in entityIds and uri != "chname:田中芳男":
                        entityIds.append(uri)

        elif label == "機械タグ":
            for value in values:
                if value not in ops:
                    mtags.append(value)
        elif label == "Color":
            color = values
        elif label == "帖数":
            book = values  

    label = member["label"]
    
    # book = label.split(" p.")[0]

    item = {
        "objectID": id,
        "label": label,
        "tag": tags,
        "mtag" : mtags,
        "thumbnail": member["thumbnail"],
        "manifest" : manifest,
        "member" : member_id,
        "_updated" : format(today, '%Y-%m-%d'),
        "agential" : agentials,
        "keyword" : keywords,
        "place" : places,
        "time" : times,
        "org" : orgs,
        "book" : book,
        "color" : color
    }

    '''
    if "images" in member:
        images = []
        for image in member["images"]:
            images.append(hashlib.md5(image.encode('utf-8')).hexdigest())
        item["images"] = images[0:10] # 5
    '''

    fulltexts = [item["label"]]

    #####

    for key in item:
      values = item[key]

      if type(values) != str:
        for value in values:
          if "http" not in value:
            fulltexts.append(value)

    '''
    path = item_dir + "/" + id.replace(":", "-") + ".json"

    with open(path, 'w') as outfile:
      json.dump(item, outfile, ensure_ascii=False,
                  indent=4, sort_keys=True, separators=(',', ': '))
    '''

    item["fulltext"] = " ".join(fulltexts)

    index.append(item)

    #####

    sims[id] = {}

    keys = ["images", "texts"]

    for key in keys:

        if key in member:
            arr = []
            for uri in member[key]:
                id2 = hashlib.md5(uri.encode('utf-8')).hexdigest()
                arr.append(id2)
            sims[id][key] = arr

    #####

    if len(entityIds) >= 2:
        for pair in itertools.combinations(entityIds, 2):
            
            id1 = pair[0]
            id2 = pair[1]

            arr = [[id1, id2], [id2, id1]]

            for r in arr:

                id1 = r[0]
                id2 = r[1]

                if id1 not in edges:
                    edges[id1] = {}

                if id2 not in edges[id1]:
                    edges[id1][id2] = 0

                edges[id1][id2] += 1

with open("/Users/nakamurasatoru/git/d_kunshujo/kunshujo/static/data/index.json", 'w') as outfile:
    json.dump(index, outfile, ensure_ascii=False,
                indent=4, sort_keys=True, separators=(',', ': '))

with open("data/freq.json", 'w') as outfile:
    json.dump(freq, outfile, ensure_ascii=False,
                indent=4, sort_keys=True, separators=(',', ': '))

edges2 = {}
for key in edges:
    map = edges[key]
    map = sorted(map.items(), key=lambda x:x[1], reverse=True)
    arr = []
    for item in map:
        arr.append({
            "label": item[0],
            "value": item[1]
        })

    edges2[key] = arr

with open("/Users/nakamurasatoru/git/d_kunshujo/kunshujo/static/data/entity_relation.json", 'w') as outfile:
    json.dump(edges2, outfile, ensure_ascii=False,
                indent=4, sort_keys=True, separators=(',', ': '))

with open("/Users/nakamurasatoru/git/d_kunshujo/kunshujo/static/data/relation.json", 'w') as outfile:
    json.dump(sims, outfile, ensure_ascii=False,
                indent=4, sort_keys=True, separators=(',', ': '))