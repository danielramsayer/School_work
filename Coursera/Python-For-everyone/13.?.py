import urllib
import xml.etree.ElementTree as ET

while True:
    address = raw_input('Enter location: ')
    if len(address) < 1 : break
    print 'Retrieving: ', address 

    stuff = urllib.urlopen(address)
    data = stuff.read()
    print 'Retrieved ', len(data), ' characters' 
    tree = ET.fromstring(data)
    lst = tree.findall('comments/comment')
    print 'Count: ', len(lst)
    
    count = 0
    for item in lst:
        number = item.find('count').text
        count += int(number)
    print 'Sum: ', count
