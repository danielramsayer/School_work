def pizza():
    print("Hello! What kind of pizza toppings would you like? Please enter 'quit' when you are done." )
    toppings = ['cheese']
    topping = ""
    while topping != 'quit':
        topping = raw_input("I'd like: ")
        toppings.append(topping)
    end = toppings.pop()
    print("Thanks! You would like " + str(toppings) + "!")

pizza()

def table():
    number = raw_input("How many in your party? ")
    if int(number) >= 8:
        print("Please hold while I find you a table.")
    else:
        print("Right this way.")

table()

def multiple():
    prompt = raw_input("What is your number? ")
    if int(prompt) % 10 == 0:
        print "This is a multiple of 10!"
    else:
        print("This is not a multiple of 10.")

multiple()
