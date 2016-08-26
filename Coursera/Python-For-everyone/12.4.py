import urllib
from BeautifulSoup import *

website = raw_input("Enter website: ")

html = urllib.urlopen(website).read()

valid = urllib.urlopen(website).getcode()

soup = BeautifulSoup(html)
count = 0
tags = soup('p')

if valid != 200:
    print "This is not a valid page."
else:
    for tag in tags:
        count += 1
    print count

