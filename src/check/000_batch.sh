set -e

# input [manifest, annolist, settings.yml]
# output [data.csv, row.csv]
python 810_item.py

# google spsに応じたデータを出力
python 820_createData.py

python 830_createIndex.py
python 840_curation.py

# 850_createSettings.py
python 860_create_points.py

python 870_rdf.py

python 880_create_manifest.py