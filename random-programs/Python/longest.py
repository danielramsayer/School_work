#Some easy warm up code from CodeByte
import re

def LongestWord(sen):
    sen = re.sub(r'\W+', ' ', sen)
    sen = sen.split(" ");
    wordlen = 0
    returnable = ""
    for word in sen:
        if len(word) > wordlen:
            returnable = word
            wordlen = len(word)
    return returnable

# keep this function call here
print LongestWord(raw_input())
