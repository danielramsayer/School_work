#Guess the Number Mini Game!

import simplegui, random

guesses = 0
sec_num = 0
num_range = 100 #Default game starts at 100, 1000 prompts different after selection.

# helper function to start and restart the game
def new_game():
    # initialize global variables used in your code here
    global guesses, sec_num, num_range
    sec_num = random.randrange(0, num_range)

def range100():
    # button that changes the range to [0,1000) and starts a new game 
    global num_range, guesses
    print "New Game! You're trying for ", num_range, " possibilities!"
    num_range = 100
    guesses = 7
    new_game()
    
def range1000():
    # button that changes the range to [0,1000) and starts a new game     
    global num_range, guesses
    print "New Game! You're trying for ", num_range, " possibilities!"
    num_range = 1000
    guesses = 10
    new_game()
    
def input_guess(guess):
    # main game logic of the game
    global guesses
    print "\n Your guess was ", guess
    guess = int(guess)
    guesses -= 1
    print "The number of remaining guesses is ", guesses
    if guesses > 0:
        if guess > sec_num:
            print "Lower!"
        elif guess < sec_num:
            print "Higher!"
        else: 
            print "That is correct!"
            new_game()
    else:
        print "Sorry! You are out of guesses! Please select game you'd like to play. :) "
        new_game()
    
# create frame
frame = simplegui.create_frame("Guess That Number!", 200, 200)

# register event handlers for control elements and start frame
frame.add_button("Range is [0,100)", range100, 200)
frame.add_button("Range is [0,1000)", range1000, 200)
frame.add_input("Enter Input Please:", input_guess, 200) 

# call new_game 
new_game()

# always remember to check your completed program against the grading rubric
