import os
from os.path import join, dirname
from dotenv import load_dotenv

load_dotenv(verbose=True)

dotenv_path = join(dirname(__file__), '.env')
load_dotenv(dotenv_path)

APP_DIR = os.environ.get("APP_DIR")
DATA_DIR = os.environ.get("DATA_DIR")
C_DIR = os.environ.get("C_DIR")
OMEKA_DIR = os.environ.get("OMEKA_DIR")
DATA2_DIR = os.environ.get("DATA2_DIR")