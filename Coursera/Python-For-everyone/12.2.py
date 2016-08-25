import socket
import urllib

website = raw_input("Enter website: ")
url = website.split("/")[2]

mysock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
mysock.connect((url, 80))
mysock.send('GET ' + website + ' HTTP/1.0\n\n')

valid = urllib.urlopen(website).getcode()
count = 0

while valid == 200:
    data = mysock.recv(100)
    count += len(data)
    if ( len(data) < 1 ) or count >=3000:
        break
    print data
else:
    print "I'm sorry, that website does not appear to be valid. Please try again."

mysock.close()
