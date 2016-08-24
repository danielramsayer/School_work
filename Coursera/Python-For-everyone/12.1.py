import socket
import urllib2

website = raw_input("Enter website: ")
splitweb = website.split("/")
url = splitweb[2]


mysock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
mysock.connect((url, 80))
mysock.send('GET ' + website + ' HTTP/1.0\n\n')

try:
    while seconddatastream.status == 200:
        data = mysock.recv(512)
        if ( len(data) < 1 ) :
            break
        print data;
except:
    print "I'm sorry, that website does not appear to be valid. Please try again."
    

mysock.close()
