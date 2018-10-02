"""Objective
Today we're expanding our knowledge of Strings and combining it with what we've already learned about loops. Check out the Tutorial tab for learning materials and an instructional video!

Task
Given a string, , of length  that is indexed from  to , print its even-indexed and odd-indexed characters as  space-separated strings on a single line (see the Sample below for more detail).

Note:  is considered to be an even index.

Input Format

The first line contains an integer,  (the number of test cases).
Each line  of the  subsequent lines contain a String, .

Constraints

Output Format

For each String  (where ), print 's even-indexed characters, followed by a space, followed by 's odd-indexed characters.

Sample Input

2
Hacker
Rank
Sample Output

Hce akr
Rn ak
"""

# Enter your code here. Read input from STDIN. Print output to STDOUT
#!/bin/python

import fileinput

#This section was a way to read in the words, and strip out the extra stuff
wordList = []
for line in fileinput.input():
    line = line.strip('\n')
    wordList.append(line)
wordList.pop(0)

#This section is to actually work through the problem
for word in wordList:
    i = 0
    evens = []
    odds = []
    for letter in word:
        if i % 2:
            evens.append(letter)
            i += 1
        else:
            odds.append(letter)
            i += 1
    Odds = ''.join(odds)
    Evens = ''.join(evens)
    print Odds, Evens
    
