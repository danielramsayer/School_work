name = raw_input("Enter file:")
if len(name) < 1 : name = "mbox-short.txt"
handle = open(name)

emails = dict()

for line in handle:
    if not line.startswith("From:"): continue
    line = line.split()
    line = line[1]
    emails[line] = emails.get(line,0)+1

#print emails

for key in emails:
    if emails[key] > 4:
        print key, emails[key]
