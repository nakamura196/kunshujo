import pandas as pd
import hashlib
import json
import requests
import os
from PIL import Image
import datetime

id = "haedong_jegukgi"

prefix2 = "https://hi-ut.github.io/ryukyu_data2/iiif/" + id

with open("../docs/iiif/" + id + "/manifest.json") as f:
    df = json.load(f)

'''
  {
    "@id": prefix2 + "/range/toc",
    "@type": "sc:Range",
    "label": "海東諸国紀目録",
    "ranges": [
      {
        "@id": prefix2 + "/range/toc1",
        "@type": "sc:Range",
        "label": "海東諸国紀目録",
        "canvases": [
          prefix2 + "/canvas/p10",
          prefix2 + "/canvas/p11",
          prefix2 + "/canvas/p12",
          prefix2 + "/canvas/p13"
        ]
      },
      {
        "@id": prefix2 + "/range/海東諸国総図",
        "@type": "sc:Range",
        "label": "海東諸国総図",
        "canvases": [
          prefix2 + "/canvas/p14",
          prefix2 + "/canvas/p15"
        ]
      },
      {
        "@id": prefix2 + "/range/日本本国図",
        "@type": "sc:Range",
        "label": "日本本国図",
        "canvases": [
          prefix2 + "/canvas/p15",
          prefix2 + "/canvas/p16"
        ]
      },
    ]
  },
  '''

toc = [
  {
    "@id": prefix2 + "/range/cover",
    "@type": "sc:Range",
    "label": "表紙",
    "canvases": [
      prefix2 + "/canvas/p4"
    ]
  },
  
  {
    "@id": prefix2 + "/range/海東諸国紀目録",
    "@type": "sc:Range",
    "label": "海東諸国紀目録",
    "canvases": [
      prefix2 + "/canvas/p10"
    ]
  },
  {
    "@id": prefix2 + "/range/海東諸国総図",
    "@type": "sc:Range",
    "label": "海東諸国総図",
    "canvases": [
      prefix2 + "/canvas/p14"
    ]
  },
  {
    "@id": prefix2 + "/range/日本本国図",
    "@type": "sc:Range",
    "label": "日本本国図",
    "canvases": [
      prefix2 + "/canvas/p15",
    ]
  },
  {
    "@id": prefix2 + "/range/日本国西海道九州図",
    "@type": "sc:Range",
    "label": "日本国西海道九州図",
    "canvases": [
      prefix2 + "/canvas/p17",
    ]
  },
  {
    "@id": prefix2 + "/range/日本国一岐島図",
    "@type": "sc:Range",
    "label": "日本国一岐島図",
    "canvases": [
      prefix2 + "/canvas/p18",
    ]
  },
  {
    "@id": prefix2 + "/range/日本国対馬島図",
    "@type": "sc:Range",
    "label": "日本国対馬島図",
    "canvases": [
      prefix2 + "/canvas/p19",
    ]
  },
  {
    "@id": prefix2 + "/range/琉球国図",
    "@type": "sc:Range",
    "label": "琉球国図",
    "canvases": [
      prefix2 + "/canvas/p20",
    ]
  },
  {
    "@id": prefix2 + "/range/日本国紀",
    "@type": "sc:Range",
    "label": "日本国紀",
    "ranges": [
      {
        "@id": prefix2 + "/range/日本国紀_天皇代序",
        "@type": "sc:Range",
        "label": "天皇代序",
        "canvases": [
          prefix2 + "/canvas/p25",
        ]
      },
      {
        "@id": prefix2 + "/range/日本国紀_国王代序",
        "@type": "sc:Range",
        "label": "国王代序",
        "canvases": [
          prefix2 + "/canvas/p59",
        ]
      },
      {
        "@id": prefix2 + "/range/日本国紀_国俗",
        "@type": "sc:Range",
        "label": "国俗",
        "canvases": [
          prefix2 + "/canvas/p61",
        ]
      },
      {
        "@id": prefix2 + "/range/日本国紀_道路里数",
        "@type": "sc:Range",
        "label": "道路里数",
        "canvases": [
          prefix2 + "/canvas/p62",
        ]
      },
      {
        "@id": prefix2 + "/range/日本国紀_八道六十六州［対馬島一岐島附］",
        "@type": "sc:Range",
        "label": "八道六十六州［対馬島一岐島附］",
        "canvases": [
          prefix2 + "/canvas/p63",
        ]
      }
    ]
  },
  {
    "@id": prefix2 + "/range/琉球国紀",
    "@type": "sc:Range",
    "label": "琉球国紀",
    "ranges": [
      {
        "@id": prefix2 + "/range/国王代序",
        "@type": "sc:Range",
        "label": "国王代序",
        "canvases": [
          prefix2 + "/canvas/p132",
        ]
      },
      {
        "@id": prefix2 + "/range/国都",
        "@type": "sc:Range",
        "label": "国都",
        "canvases": [
          prefix2 + "/canvas/p133",
        ]
      },{
        "@id": prefix2 + "/range/国俗",
        "@type": "sc:Range",
        "label": "国俗",
        "canvases": [
          prefix2 + "/canvas/p134",
        ]
      },{
        "@id": prefix2 + "/range/道路里数",
        "@type": "sc:Range",
        "label": "道路里数",
        "canvases": [
          prefix2 + "/canvas/p135",
        ]
      }
    ]
  },
  {
    "@id": prefix2 + "/range/朝聘応接紀",
    "@type": "sc:Range",
    "label": "朝聘応接紀",
    "ranges": [
      {
        "@id": prefix2 + "/range/使船定数",
        "@type": "sc:Range",
        "label": "使船定数",
        "canvases": [
          prefix2 + "/canvas/p135",
        ]
      },
      {
        "@id": prefix2 + "/range/諸使定例",
        "@type": "sc:Range",
        "label": "諸使定例",
        "canvases": [
          prefix2 + "/canvas/p136",
        ]
      },{
        "@id": prefix2 + "/range/使船大小船夫定額",
        "@type": "sc:Range",
        "label": "使船大小船夫定額",
        "canvases": [
          prefix2 + "/canvas/p136",
        ]
      },{
        "@id": prefix2 + "/range/給図書",
        "@type": "sc:Range",
        "label": "給図書",
        "canvases": [
          prefix2 + "/canvas/p137",
        ]
      },
      {
        "@id": prefix2 + "/range/諸使迎送",
        "@type": "sc:Range",
        "label": "諸使迎送",
        "canvases": [
          prefix2 + "/canvas/p137",
        ]
      },{
        "@id": prefix2 + "/range/三浦熟供",
        "@type": "sc:Range",
        "label": "三浦熟供",
        "canvases": [
          prefix2 + "/canvas/p137",
        ]
      },
      {
        "@id": prefix2 + "/range/三浦分泊",
        "@type": "sc:Range",
        "label": "三浦分泊",
        "canvases": [
          prefix2 + "/canvas/p138",
        ]
      },{
        "@id": prefix2 + "/range/三浦宴",
        "@type": "sc:Range",
        "label": "三浦宴",
        "canvases": [
          prefix2 + "/canvas/p138",
        ]
      },
      {
        "@id": prefix2 + "/range/路宴",
        "@type": "sc:Range",
        "label": "路宴",
        "canvases": [
          prefix2 + "/canvas/p139",
        ]
      },{
        "@id": prefix2 + "/range/京中迎餞",
        "@type": "sc:Range",
        "label": "京中迎餞",
        "canvases": [
          prefix2 + "/canvas/p140",
        ]
      },
      {
        "@id": prefix2 + "/range/昼奉盃",
        "@type": "sc:Range",
        "label": "昼奉盃",
        "canvases": [
          prefix2 + "/canvas/p140",
        ]
      },{
        "@id": prefix2 + "/range/京中日供",
        "@type": "sc:Range",
        "label": "京中日供",
        "canvases": [
          prefix2 + "/canvas/p141",
        ]
      },

      {
        "@id": prefix2 + "/range/闕内宴",
        "@type": "sc:Range",
        "label": "闕内宴",
        "canvases": [
          prefix2 + "/canvas/p142",
        ]
      },
      {
        "@id": prefix2 + "/range/礼曹宴",
        "@type": "sc:Range",
        "label": "礼曹宴",
        "canvases": [
          prefix2 + "/canvas/p142",
        ]
      },{
        "@id": prefix2 + "/range/名日宴",
        "@type": "sc:Range",
        "label": "名日宴",
        "canvases": [
          prefix2 + "/canvas/p143",
        ]
      },{
        "@id": prefix2 + "/range/下程",
        "@type": "sc:Range",
        "label": "下程",
        "canvases": [
          prefix2 + "/canvas/p143",
        ]
      },
      {
        "@id": prefix2 + "/range/例賜",
        "@type": "sc:Range",
        "label": "例賜",
        "canvases": [
          prefix2 + "/canvas/p144",
        ]
      },{
        "@id": prefix2 + "/range/別賜",
        "@type": "sc:Range",
        "label": "別賜",
        "canvases": [
          prefix2 + "/canvas/p144",
        ]
      },
      {
        "@id": prefix2 + "/range/留浦日限",
        "@type": "sc:Range",
        "label": "留浦日限",
        "canvases": [
          prefix2 + "/canvas/p144",
        ]
      },{
        "@id": prefix2 + "/range/修船給粧",
        "@type": "sc:Range",
        "label": "修船給粧",
        "canvases": [
          prefix2 + "/canvas/p145",
        ]
      },
      {
        "@id": prefix2 + "/range/日本船鉄釘体制",
        "@type": "sc:Range",
        "label": "日本船鉄釘体制",
        "canvases": [
          prefix2 + "/canvas/p145",
        ]
      },{
        "@id": prefix2 + "/range/上京道路",
        "@type": "sc:Range",
        "label": "上京道路",
        "canvases": [
          prefix2 + "/canvas/p145",
        ]
      },
      {
        "@id": prefix2 + "/range/過海料",
        "@type": "sc:Range",
        "label": "過海料",
        "canvases": [
          prefix2 + "/canvas/p146",
        ]
      },{
        "@id": prefix2 + "/range/給料",
        "@type": "sc:Range",
        "label": "給料",
        "canvases": [
          prefix2 + "/canvas/p146",
        ]
      },
      {
        "@id": prefix2 + "/range/諸道宴儀",
        "@type": "sc:Range",
        "label": "諸道宴儀",
        "canvases": [
          prefix2 + "/canvas/p147",
        ]
      },{
        "@id": prefix2 + "/range/礼曹宴儀",
        "@type": "sc:Range",
        "label": "礼曹宴儀",
        "canvases": [
          prefix2 + "/canvas/p149",
        ]
      },{
        "@id": prefix2 + "/range/三浦禁約",
        "@type": "sc:Range",
        "label": "三浦禁約",
        "canvases": [
          prefix2 + "/canvas/p150"
        ]
      },
      {
        "@id": prefix2 + "/range/釣魚禁約",
        "@type": "sc:Range",
        "label": "釣魚禁約",
        "canvases": [
          prefix2 + "/canvas/p150",
        ]
      }
    ]
  },
  {
    "@id": prefix2 + "/range/back",
    "@type": "sc:Range",
    "label": "裏表紙",
    "canvases": [
      prefix2 + "/canvas/p160"
    ]
  },
]

df["structures"] = toc

with open("../docs/iiif/" + id + "/manifest_toc.json", 'w') as outfile:
    json.dump(df, outfile, ensure_ascii=False,
            indent=4, sort_keys=True, separators=(',', ': '))