document = open("F:\\Stories\\adult stories\\rancher-ted.txt", "r+")
profanity = ["fuck", "cock", "fucked", "shit", "ass", "bitch", "bastard", "cunt", "damn", "goddamn", "hell", "god damn", "motherfucker","cock"]

def swear():
    contents = document.read().lower().split(" ", re.sub("[a-zA-Z]"))
    for word in profanity:
        if word in contents:
            print word, "is in this file", contents.count(word), "times!"
        else:
            print word, "is not in this file!"
    document.close()
swear()
