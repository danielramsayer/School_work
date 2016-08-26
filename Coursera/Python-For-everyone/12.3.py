import urllib

website = raw_input("Enter website: ")
html = urllib.urlopen(website).read()

valid = urllib.urlopen(website).getcode()
print valid

if valid != 200:
    print "This is not a valid page."
else:
    print html[:3000]
    count = len(html)
    print count

