import string
name = raw_input("Enter file:")
if len(name) < 1 : name = "romeo.txt"
handle = open(name)

times = dict()

for line in handle:
    word = line.split()
    for wrds in word:
        words = wrds.lower()
        for letter in words:
            times[letter]=times.get(letter,0)+1 #This is the important part

lst = list()

for key,val in times.items():
    lst.append((val,key))

lst.sort(reverse=True)

for key, val in lst:
    print key, val
