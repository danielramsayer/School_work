
# Note - this code must run in Python 2.x and you must download
# http://www.pythonlearn.com/code/BeautifulSoup.py
# Into the same folder as this program

import urllib
from BeautifulSoup import *

url = raw_input('Enter - ')
count = raw_input('Enter count: ')
count = int(count)
position = raw_input('Enter position: ')
position = int(position)-1

#This is where we start the repeat loop
for i in range(0,count+1):

    #reading the url in
    html = urllib.urlopen(url).read()
    #using soup on our read in info
    soup = BeautifulSoup(html)
    #This is reading through to input url and printing out the values for them
    if i <= count:
        print 'Retrieving: ' + url
    else:
        print "No links on this page."
        break

    #Retrieving the anchor tags for tag loop
    tags = soup('a')

    #looping through the tags to find tag position
    pos_count = 0
    for tag in tags:
        if pos_count == position:
            url = str(tag.get('href', None))
            break
        pos_count += 1
