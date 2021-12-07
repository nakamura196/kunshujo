import googlemaps
import json
import pandas as pd

path = "data/301.xlsx"

df = pd.read_excel(path, sheet_name=0, header=None, index_col=None, engine='openpyxl')

r_count = len(df.index)
c_count = len(df.columns)

ll_index = 5

list = []

for i in range(6, r_count):

    ll = df.iloc[i, ll_index]

    if not pd.isnull(ll):
        list.append(ll)

#GoogleMapsAPI用に取得したAPIキーを変数に格納する
Key = "AIzaSyDTms6_G0CecQJOZ1MyMFX-PWZ5oJGgkXk"

#GoogleMapsAPI用にAPIキーを返す
gmaps = googlemaps.Client(key=Key)

json_open = open("data/map.json", 'r')
geo = json.load(json_open)

count = 0

#リストの中から順番に住所を探していく
for i in list:
    if i not in geo:
        results = gmaps.reverse_geocode((i), language='ja')
        geo[i] = results

    count += 1

f2 = open("data/map.json", 'w')
json.dump(geo, f2, ensure_ascii=False, indent=4,
            sort_keys=True, separators=(',', ': '))