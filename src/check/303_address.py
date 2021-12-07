import googlemaps
import json
import pandas as pd

path = "data/301.xlsx"

df = pd.read_excel(path, sheet_name=0, header=None, index_col=None, engine='openpyxl')

r_count = len(df.index)
c_count = len(df.columns)

ll_index = 5


json_open = open("data/map.json", 'r')
geo = json.load(json_open)

for i in range(6, r_count):
    ll = df.iloc[i, ll_index]

    if ll in geo:

        values = geo[ll]
        res = ""
        for value in values:
            formatted_address = value["formatted_address"]
            if "日本、" in formatted_address and "〒" in formatted_address:
                
                if res == "":
                    res = formatted_address
                else:
                    if len(res) > len(formatted_address):
                        res = formatted_address
        
        if len(res.split(" ")) > 1: 
            res = res.split(" ")[1]

        if res != "":
            df.iloc[i, ll_index + 1] = res


df.to_excel('data/303.xlsx', index=False, header=False)


    