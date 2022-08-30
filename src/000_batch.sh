set -e
python 001_createSt.py

# relation2.jsonを作成する
# - relation2.json: 類似画像検索？
python 031_createIndex.py

# entity.jsonを作成する
# 
python 021_createIndex.py

# 以下を作成する
# - gcv.json: インデックス
# - gcv_relation.json: 関連アイテム
python 051_createGcvIndex.py

# 一時的な処理
python 900_remove_f.py