import urllib
import json

#serviceurl = 'http://maps.googleapis.com/maps/api/geocode/json?'
serviceurl = 'http://python-data.dr-chuck.net/geojson?'

while True:
    address = 'Missouri University of Science and Technology'
    if len(address) < 1 : break

    url = serviceurl + urllib.urlencode({'sensor':'false', 'address': address})

    print 'Retrieving', url
    uh = urllib.urlopen(url)

    data = uh.read()
    print data
    print 'Retrieved',len(data),'characters'

    try: js = json.loads(str(data))
    except: js = None
    if 'status' not in js or js['status'] != 'OK':
        print '==== Failure To Retrieve ===='
        print data
        continue

    print json.dumps(js, indent=4)

    lat = js["results"][0]["geometry"]["location"]["lat"]
    lng = js["results"][0]["geometry"]["location"]["lng"]
    placeid = js["results"][0]["place_id"]
    print 'lat',lat,'lng',lng,'place id',placeid
    location = js['results'][0]['formatted_address']
    print location
