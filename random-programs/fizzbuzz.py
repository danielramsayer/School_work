for number in range(100):
    if number % 3 == 0 and number % 5 == 0:
        print number, "fizzbuzz"
    elif number % 5 == 0:
        print number, "buzz"
    elif number % 3 == 0:
        print number, "fizz"
