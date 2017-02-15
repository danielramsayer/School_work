"""
This is a quick word checker, for example it's checking from a short list of swear words for a file.
"""


document = open("F:\\file_with_swear_words.txt", "r+")
profanity = ["fuck", "shit", "bastard", "damn", "goddamn", "hell"]

def swear():
    contents = document.read().lower()
    
    for word in profanity:
        if word in contents:
            print word, "is in this file", contents.count(word), "times!"
        else:
            print word, "is not in this file!"
    document.close()
swear()
