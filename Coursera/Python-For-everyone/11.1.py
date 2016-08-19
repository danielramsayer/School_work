import re
name = raw_input("Enter file: ")
word = raw_input("Enter saught after word: ")
if len(name) < 1 : name = "regex_sum_306251.txt"
handle = open(name)

lst = list()
num = 0

for line in handle:
    line = line.rstrip()
    if re.search(r'word', line):
        num += 1

print "The file had " + str(num) + " lines that matched " + word + "."
