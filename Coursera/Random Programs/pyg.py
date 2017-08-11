"""
This is a quick pig latin translater to test python code
Daniel Ramsayer
4/30/2016
"""

#The 'latin'
pyg = 'ay'

original = raw_input('Text to be translated into PygLatin, please: ')

string1 = []
string2 = []

#Tranlate input into pyglatin.
string1 = original.split()
for word in string1:
    #convert to lower case
    lword = word.lower()
    #grab the first letter
    first = lword[0]
    #create the 'latin word'
    new_word = lword[1:len(lword)] + first + pyg
    #print new_word
    string2.append(new_word)
print ' '.join(string2)
