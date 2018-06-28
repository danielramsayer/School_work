#This program counts the words in a file and returns the number

file_loc = input("Where is the file that you want to check?")

f = open(file_loc, 'r+')
f = f.split()
print f
