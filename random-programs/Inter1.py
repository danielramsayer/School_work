"""
Job interview Question:

In the language of your choice write a program which takes some body of
 text and outputs the first letter of every word, seperated into groups by punctuation (,.!?)

so: The quick brown fox jumps over the lazy dog. But the dog totally deserved it.
would be: Tqbfjotld Btdtdi
"""
#Answer
import re

input = input("Sentence Please.").split()
output = ""

for word in input:
    output += (word[0])
    output += "" if re.match("^[a-zA-Z0-9]*$", word) else " "

print(output)
