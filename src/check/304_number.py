import googlemaps
import json
from kanjize import int2kanji, kanji2int
import pandas as pd

path = "data/303.xlsx"

df = pd.read_excel(path, sheet_name=0, header=None, index_col=None, engine='openpyxl')

r_count = len(df.index)
c_count = len(df.columns)

desc_index = 10

for i in range(6, r_count):

    # value = ""

    desc = df.iloc[i, desc_index]

    if pd.isnull(desc):
        continue

    desc = str(desc)
    
    if "石余" in desc:
        value = desc.split("石余")[0]
        

        value = value.replace("弐", "二").replace("拾", "十").replace("卅", "三十").replace("廿", "二十")

        print(value)

        m = kanji2int(value)

        print(m)

        df.iloc[i, desc_index + 1] = m

df.to_excel('data/304.xlsx', index=False, header=False)


    