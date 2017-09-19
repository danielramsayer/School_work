x = 25#base number for finding the root of
epsilon = .01 #How close are you willing to get?
step = .1 #step of searching through
numGuesses = 0 #counter to keep track of guesses
ans = 0.0 #starting off with answer equal to 0

"""This is to check if you've gone too far if answer^2 - x is bigger than epsilon, 
so long as ans is less than or equal to x this should still run."""
while (abs(ans**2 - x)) >= epsilon and ans <= x: 
    ans += step #Answer increments through
    numGuesses += 1 #Counter for guesses
    print (abs(ans**2 -x)) #size of 
print ('numGuesses = ' + str(numGuesses)) #prints times guessed
if abs(ans**2-x) >= epsilon: #is the answer close enough?
    print('Failed on square root of' + str(x)) #not close enough
else: #close enough and print!
    print(str(ans) + ' is close to the square to of ' +str(x)) 