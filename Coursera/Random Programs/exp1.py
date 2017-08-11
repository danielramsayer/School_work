def splitting():
    text = raw_input("Please list out your favorite food(s): ")
    texts = text.replace(",", "")
    words = texts.split(" ")     
    for word in words:
        print word

    verification = raw_input("Is this list correct? Y/N ")
    if verification.upper() == "N":
        splitting()
    else:
        print ("Great, your favorite food(s) are: " + text)

def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)

#string = raw_input("What word do you want to verify is a palindrome? ")

def palindrome(string):
    if string == '':
        return 'This is a palindrome!'
    else:
        if string[0] == string[-1]:
            return palindrome(string[1:-1])
        else:
            return 'This is not a palindrome!'

def check_palindrome(*args):
    string = raw_input("What word do you want to verify is a palindrome? ").upper()
    print palindrome(string)
    double_check = raw_input("Would you like to try again? Y/N ")
    if double_check.upper[0] == "Y":
        string = raw_input("What word do you want to verify is a palindrome? ")
        string = string.upper()
        print palindrome(string)
    elif double_check.upper[0] == "N":
        print ("Thank you for checking, please come back if you would like to check again!")
    else:
        print ("I'm sorry, that was not a valid response. Goodbye.")

print check_palindrome()
        

