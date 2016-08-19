import re
name = raw_input("Enter file: ")
if len(name) < 1 : name = "regex_sum_306251.txt"
handle = open(name)

lst = list()
num = 0
count = 0

for line in handle:
    line = line.rstrip()
    number = re.findall("[-+]?\d+[\.]?\d*", line)
    if len(number) > 0:
        lst += number
        lst = [int(i) for i in lst]
        count += 1

for numb in lst:
    num += numb
print num
print count
print num/count
