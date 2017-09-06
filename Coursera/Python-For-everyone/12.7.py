import urllib
from BeautifulSoup import *

total = 0

url = raw_input('Enter - ')
html = urllib.urlopen(url).read()

soup = BeautifulSoup(html)

# Retrieve all of the span tags
tags = soup('span')
for tag in tags:
    # Look at the parts of a tag
    number = tag.contents[0]
    total += int(number)
print total
