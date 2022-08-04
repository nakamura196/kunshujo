import pandas as pd
import json
import hashlib
import datetime
import itertools
today = datetime.datetime.now()
import settings
import gzip

APP_DIR = settings.APP_DIR
DATA_DIR = settings.DATA_DIR
C_DIR = settings.C_DIR

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

import pandas as pd

df = pd.read_csv('data/books.csv')
# print(df)
book_ids = {}
for index, row in df.iterrows():
    book_ids[row["a"]] = row["b"]

path = f"{DATA_DIR}/docs/curation/mod.json.gz"

with gzip.open(path, 'r') as f:
    '''
    for line in f:
        print(line)
        st = json.loads(line)
    '''
    json_bytes = f.read()
    json_str = json_bytes.decode('utf-8')            # 2. string (i.e. JSON)
    st = json.loads(json_str) 

'''
with open(path) as f:
    st = json.load(f)
'''

path = f"{C_DIR}/src/projects/kunshujo/data/401_res.json"

dbl = []

with open(path) as f:
    dbl2 = json.load(f)

    for key in dbl2:
        if dbl2[key]["dbl"] == "good":
            dbl.append(key)

path = f"{DATA_DIR}/docs/curation/add_gcv.json"

mtags3 = {}

with open(path) as f:
    mtags2 = json.load(f)

    selections = mtags2["selections"]

    for selection in selections:
        for member in selection["members"]:
            mid = hashlib.md5(member["@id"].encode('utf-8')).hexdigest()

            if mid in dbl:
                parent = member["within"]

                if parent not in mtags3:
                    mtags3[parent] = []

                label = member["label"]

                if label not in mtags3[parent]:
                    mtags3[parent].append(label)


# Entityの対応表
path = "data/reps.json"

with open(path) as f:
    reps = json.load(f)

index = []

selections = st["selections"]

freq = {}

edges = {}

sims = {}

hie = {}

# 外国
excludes = ["439de0af-e08a-476d-a4f4-db91daee0413", "c8e64d67-51af-4cfb-99f9-2c191ac4ef3b",
            "e4756874-9c62-4abf-9588-ab6b243df0ba", "28f334b3-8ef0-4e98-92d8-1f055514cef3", 
            "b9e50108-b8b0-43e5-ae16-c5c51d3e457c"]

for selection in selections:
  members = selection["members"]

  manifest = selection["within"]["@id"]

  manifest_id = manifest.split("/")[-2]

  # 外国は除外
  if manifest_id in excludes:
    continue

  for member in members:

    member_id = member["@id"]

    id = hashlib.md5(member_id.encode('utf-8')).hexdigest()

    metadata = member["metadata"]

    tags = []
    mtags = mtags3[id] if id in mtags3 else [] # []

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
            pass
            '''
            for value in values:
                if value not in excludes and value not in mtags:
                    mtags.append(value)
            '''
        elif label == "Color":
            color = values
        elif label == "入力者":
            for value in values:
                if "[" in value:
                    etc = value.split("[")[1].split("]")[0].split("］")[0].strip().replace("kunn", "kun").replace("gagoku", "gaigoku")
                    test = etc.split("-")
                    if len(test) == 3:
                        # print(test)

                        a1 = test[0]
                        a2 = test[1]
                        a3 = test[2]

                        if a1 not in hie:
                            hie[a1] = {}

                        if a2 not in hie[a1]:
                            hie[a1][a2] = {}

                        if a3 not in hie[a1][a2]:
                            hie[a1][a2][a3] = []
                        
                        hie[a1][a2][a3].append(id)

        elif label == "帖数":
            book = ['[{}] {}'.format(book_ids[values[0]], values[0])]

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

    fulltexts = [item["label"]]

    #####

    for key in item:
      values = item[key]

      if type(values) != str:
        for value in values:
          if "http" not in value:
            fulltexts.append(value)

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

# インデックスを作成
with open("../static/data/index.json", 'w') as outfile:
    json.dump(index, outfile, ensure_ascii=False,
                indent=4, sort_keys=True, separators=(',', ': '))

# エンティティ毎の頻度マップを作成
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

# エンティティの関連
with open("../static/data/entity_relation.json", 'w') as outfile:
    json.dump(edges2, outfile, ensure_ascii=False,
                indent=4, sort_keys=True, separators=(',', ': '))

# 関連アイテム
with open("../static/data/relation.json", 'w') as outfile:
    json.dump(sims, outfile, ensure_ascii=False,
                indent=4, sort_keys=True, separators=(',', ': '))

map = {}

for key1 in hie:
    for key2 in hie[key1]:
        keys = hie[key1][key2]
        '''
        if len(keys) == 1:
            pass
            # print(key1, key2, 1)
        else:
        '''
        arr = []
        for key3 in keys:
            '''
            if len(keys[key3]) > 1:
                print(key1, key2, 2)
            '''
            for id in keys[key3]:
                arr.append(id)

        for id in arr:
            arr2 = []
            for id2 in arr:
                if id != id2:
                    arr2.append(id2)

            map[id] = arr2

# 要調査
with open("../static/data/relation2.json", 'w') as outfile:
    json.dump(map, outfile, ensure_ascii=False,
                indent=4, sort_keys=True, separators=(',', ': '))

