#Some easy warm up code from CodeByte
def LetterChanges(str):
    newthing = ""
    for word in str:
        for letter in word:
            if letter.isalpha()==False:
                newthing += letter
            elif letter != 'z':
                letter = chr(ord(letter) + 1)
                if (letter == 'a' or letter =='e' or letter =='i' or letter =='o' or letter =='u' or letter =='y'):
                    letter = letter.upper()
                newthing += letter
            else:
                letter = 'A'
                newthing += letter
    # code goes here
    return newthing

# keep this function call here
print LetterChanges(raw_input())
