fname = raw_input("Hello, what is the name of the file to open:? ")
try:
    fhand = open("romeo.txt")
except:
    print "I'm sorry, that doesn't appear to be the correct file name."
    exit()
    
lst = list()

for line in fhand:
    for word in line.split():
        if word not in lst:
            lst.append(word)
print sorted(lst)
