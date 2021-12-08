import pandas as pd
import urllib.parse
import json
import copy

df = pd.read_csv('data/data.csv', header=0)

checks = {}

# prefixes = []

map = {}
items = {}

for index, row in df.iterrows():
  cel0 = row["タグ"]

  entities = []

  for i in range(0, 6):
    data = row["URI（構造化データ）{}".format(".{}".format(i) if i != 0 else "")]

    if not pd.isnull(data):

      if ":" not in data:
        print(":を含まない", data)
        continue
      
      '''
      prefix = data.split(":")[0]

      if "https" == prefix:
        print(row)

      if prefix not in prefixes:
        prefixes.append(prefix)
      '''

      # obj = {}

      # obj["uri"] = data

      if data not in map:
        map[data] = {
          "wikidata": [],
          "kotobank": [],
          "wiki" : []
        }

      ###### 

      entity = row["URL（エンティティリンキング）{}".format(".{}".format(i) if i != 0 else "")]

      if not pd.isnull(entity):
        # obj["wiki" if "wiki" in entity else "kotobank"]  = urllib.parse.unquote(entity).split("|")
        values = urllib.parse.unquote(entity).split("|")

        
        for value in values:
          type = ""
          if "wikidata" in value:
            type = "wikidata"
          elif "wiki" in value:
            type = "wiki"

            if value not in checks:
              checks[value] = []

            if data not in checks[value]:
              checks[value].append(data)
          elif "kotobank" in value:
            type = "kotobank"

          if type != "":
            if value not in map[data][type]:
              map[data][type].append(value)

      entities.append(data)
  
  if len(entities) > 0:
    items[cel0] = entities
  
    # items[cel0] = 

# print(items["keyword:アワビ"])

# print(map["keyword:アワビ"])

res = {}

for cel0 in items:
  values = items[cel0]
  
  values2 = []

  for value in values:
    b = copy.deepcopy(map[value]) #変更行
    b["uri"] = value
    values2.append(b)

  res[cel0] = values2


with open("data/structured.json", 'w') as outfile:
    json.dump(res, outfile, ensure_ascii=False,
                indent=4, sort_keys=True, separators=(',', ': '))
      
# print(prefixes)

# print(checks)

reps = {}

for key in checks:
  values = checks[key]
  if len(values) > 1:
    for value in values:
      prefix = value.split(":")[0]
      ln = key.split("/")[-1]
      data2 = prefix + ":" + ln
      if value != data2:
        reps[value] = data2

with open("data/reps.json", 'w') as outfile:
    json.dump(reps, outfile, ensure_ascii=False,
                indent=4, sort_keys=True, separators=(',', ': '))