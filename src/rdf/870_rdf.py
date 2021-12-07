import urllib.request
from bs4 import BeautifulSoup
import csv
from time import sleep
import pandas as pd
import json
import urllib.request
import os
from PIL import Image
import yaml
import requests
import sys
import argparse

from rdflib import URIRef, BNode, Literal, Graph
from rdflib.namespace import RDF, RDFS, FOAF, XSD
from rdflib import Namespace

sys.path.append('/Users/nakamurasatoru/git/classes')
from rdf import Rdf as rdf

# f = open("../settings.yml", "r+")
# prefix = yaml.load(f, Loader=yaml.SafeLoader)["prefix"]

all = Graph()

###########

json_open = open("../../static/data/index.json", 'r')
index = json.load(json_open)

parent = "entity"
tag = "place"

for obj in index:
    item = Graph()

    id = obj["objectID"]

    subjectStr = "https://www.hi.u-tokyo.ac.jp/collection/degitalgallary/ryukyu/api/{}/{}/{}.json".format(parent, tag, id)

    subject = URIRef(subjectStr)

    # type

    t = "https://jpsearch.go.jp/term/type/Place"

    stmt = (subject, RDF.type, URIRef(t))
    item.add(stmt)

    # label

    label = obj["label"].strip()

    stmt = (subject, RDFS.label, Literal(label))
    item.add(stmt)

    # iiif

    iiif = obj["manifest"] + "#canvas=" + obj["member"]

    stmt = (subject, URIRef("http://schema.org/relatedLink"), URIRef(iiif))
    item.add(stmt)

    # thumb

    value = obj["thumbnail"]

    stmt = (subject, URIRef("http://schema.org/image"), URIRef(value))
    item.add(stmt)

    

    # desc

    values = [
        {
            "s": subjectStr,
            "type": "literal",
            "p" : "http://schema.org/description",
            "value": "分類: " + obj["category"][0]
        }
    ]

    # geo

    if obj["latitude"][0] != "":

        lat = float(obj["latitude"][0])
        lon = float(obj["longitude"][0])

        geohash = rdf.geohash(lat, lon)

        values.append({
            "s": subjectStr,
            "type": "uri",
            "p" : "http://schema.org/geo",
            "value": geohash
        })

        values.append({
            "s": geohash,
            "type": "literal",
            "p" : "http://schema.org/latitude",
            "value": lat
        })

        values.append({
            "s": geohash,
            "type": "literal",
            "p" : "http://schema.org/longitude",
            "value": lon
        })

    ### 

    for value in values:

        a = value["value"]

        t = value["type"]

        v = ""

        if t == "literal":
            v = Literal(a)
        elif t == "uri":
            v = URIRef(a)

        if v != "":
            stmt = (URIRef(value["s"]), URIRef(value["p"]), v)
            item.add(stmt)

    ###

    path = "../../static/api/{}/{}/{}.json".format(parent, tag, id)
    os.makedirs(os.path.dirname(path), exist_ok=True)

    item.serialize(destination=path, format='json-ld')

    for stmt in item:
        all.add(stmt)

all.serialize(destination="../../static/api/data.ttl", format='turtle')

'''
for sheet in geo:

    rows = sheet["value"]

    for row in rows:
        if "uri" not in row and row["uri"] == "":
            continue
        subject = URIRef(row["uri"])

        stmt = (subject, RDFS.label, Literal(row["rdfs:label"]))
        all.add(stmt)

        stmt = (subject, RDF.type, URIRef("https://jpsearch.go.jp/term/type/Place"))
        all.add(stmt)

        for key in row:
            if "description:" in key:
                ln = key.replace("description:", "").strip()
                stmt = (subject, URIRef("http://schema.org/description"), Literal(ln+": "+row[key]))
                all.add(stmt)
            elif "schema:description" in key:
                if row[key] == "":
                    continue
                stmt = (subject, RDFS.comment, Literal(row[key]))
                all.add(stmt)
            elif "schema:geo" in key:
                if row[key] == "":
                    continue
                geo = URIRef(row[key])
                stmt = (subject, URIRef("http://schema.org/geo"), geo)
                all.add(stmt)

                stmt = (geo, URIRef("http://schema.org/latitude"), Literal(float(row["schema:latitude"])))
                all.add(stmt)

                stmt = (geo, URIRef("http://schema.org/longitude"), Literal(float(row["schema:longitude"])))
                all.add(stmt)
            elif "schema:url" in key:
                manifest = URIRef(row[key])
                stmt = (subject, URIRef("http://schema.org/url"), manifest)
                all.add(stmt)

                stmt = (manifest, RDF.type, URIRef("http://iiif.io/api/presentation/2#Manifest"))
                all.add(stmt)
            elif "schema:relatedLink" in key:
                stmt = (subject, URIRef("http://schema.org/relatedLink"), URIRef(row[key]))
                all.add(stmt)
            elif "schema:isPartOf" in key:
                parent = URIRef(row[key])
                stmt = (parent, URIRef("http://schema.org/spatial"), subject)
                all.add(stmt)


                parent_id = row[key].split("/")[-1]

                stmt = (subject, URIRef("https://jpsearch.go.jp/term/property#sourceData"), URIRef(prefix + "/curation/" + parent_id + ".json"))
                all.add(stmt)



            elif "schema:image" in key:
                stmt = (subject, URIRef("http://schema.org/image"), URIRef(row[key]))
                all.add(stmt)

            elif "schema:category" in key:
                if row[key] == "":
                    continue

                stmt = (subject, URIRef("http://schema.org/category"), Literal(row[key]))
                all.add(stmt)
                


path = "data/all2.json"
all.serialize(destination=path, format='json-ld')
all.serialize(destination=path.replace(".json", ".ttl"), format='turtle')
all.serialize(destination=path.replace(".json", ".rdf"), format='xml')
'''