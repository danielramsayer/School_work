# Use the file name mbox-short.txt as the file name
sunning, count = 0.0,0.0
fname = raw_input("Enter file name: ")
fh = open(fname)
for line in fh:
    if not line.startswith("X-DSPAM-Confidence:") : continue
    number = line.find(" ")
    for lines in line:
        sunning += float(line[number:])
        count += 1
confidence_sunning = float(sunning / count)
print "Average spam confidence: " + str(confidence_sunning)
