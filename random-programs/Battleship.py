#Welcome to BattleShip! This game is a simple one player battleship where the player pits their wits against the computer.

from random import randint
ocean = []

for x in range(5):
    ocean.append(["O"] * 5)

def print_board(ocean):
    for row in ocean:
        print " ".join(row)

print "Let's play Battleship!"
print_board(ocean)

def random_row(ocean):
    return randint(0, len(ocean) - 1)
def random_col(ocean):
    return randint(0, len(ocean[0]) - 1)

battleship_row = random_row(ocean)
battleship_col = random_col(ocean)

# Everything from here on should go in your for loop!
# Be sure to indent four spaces!
for turn in range(4):
    guess_row = int(raw_input("Which row do you think the battleship is in? Please select 0-4:"))
    guess_col = int(raw_input("Which column do you think the battleship is in? Please select 0-4:"))
    
    if guess_row == battleship_row and guess_col == battleship_col:
        print "Congratulations! You sank my battleship!"
        break
    else:
        if guess_row not in range(5) or guess_col not in range(5):
            print "That's not even in the ocean!"
        elif(ocean[guess_row][guess_col] == "X"):
            print "You've guessed that one already."
        else:
            if turn == 3:
                print "Game Over."
            else:
                print "You missed my battleship!"
                ocean[guess_row][guess_col] = "X"
        
        print_board(ocean)
    print "Turn", turn + 1
