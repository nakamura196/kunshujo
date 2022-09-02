import json
import os
from urllib import request

from tqdm import tqdm

filenames = ["index.json", "gcv.json"]

for filename in filenames:
    path = "../static/data/" + filename

    with open(path) as f:
        items = json.load(f)

    for item in tqdm(items):

        # print(item)

        id = item["objectID"]

        url = item["thumbnail"].replace(",300", ",150")

        path = "../static/data/images/" + id + ".jpg"

        if os.path.exists(path):
            continue

        request.urlretrieve(url, path)

        # break

    # break