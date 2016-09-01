import urllib
import json


url = raw_input('What file would you like to pull data from? ')
if len(url) < 1 : print 'Incorrect, please try again. '

uh = urllib.urlopen(url)
data = uh.read()
print 'Retrieved ', len(data), 'characters'

info = json.loads(data)
print 'User count:', len(info)
things = info['comments']
count = 0
for item in things:
    count += item['count']
print count
