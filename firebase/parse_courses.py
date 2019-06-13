from os import system, getenv
from json import dumps
from bs4 import BeautifulSoup
from dotenv import load_dotenv
import urllib.request as urllib

load_dotenv(dotenv_path='../.env.local')

DATA = list()

URL = getenv('CONSTANT_COURSES_URL')
PATH = getenv('CONSTANT_COURSES_PATH')

PAGE = PAGE = urllib.urlopen(URL)
SOUP = BeautifulSoup(str(PAGE.read()), features='html.parser')
TABLE = SOUP('table')[1].find('tbody')

for row in TABLE('tr'):
  cols = [elem.text.strip() for elem in row('td')]
  cols = [elem for elem in cols if elem]
  DATA.append({
    'id': len(DATA),
    'code': f'{cols[0]} {cols[1]}',
    'title': cols[2],
    'clusters': cols[3].split(',')
  })

system(f'firebase database:set -d \'{dumps(DATA)}\' -y {PATH}')
