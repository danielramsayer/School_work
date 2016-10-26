# implementation of card game - Memory

import simplegui
import random

HEIGHT = 100
WIDTH = 800

# helper function to initialize globals
def new_game():
    global state, exposed, state, cards, card1, card2, moves
    state = 0
    cards = [(int % 8) for int in range(16)]
    random.shuffle(cards)
    exposed = [False]*16
    card1 = -1
    card2 = -1
    moves = 0
     
# define event handlers
def mouseclick(pos):
    global state, moves, card1, card2
    DIndex = list(pos)[0]//50
    
    if not exposed[DIndex]:
        if state == 0:
            card1 = DIndex            
            exposed[DIndex] = True
            state = 1
        elif state == 1:
            card2 = DIndex
            exposed[DIndex] = True
            state = 2
        else:
            state = 1
            if cards[card1] != cards[card2]:
                exposed[card1] = False
                exposed[card2] = False
            exposed[DIndex] = True
            card1 = DIndex
            card2 = -1
            moves += 1            
                        
# cards are logically 50x100 pixels in size    
def draw(canvas):
    for i in range(16):
        if exposed[i]:
            canvas.draw_polygon([[i*50, 0], [(i+1)*50, 0], [(i+1)*50, 100], [i*50, 100]], 1, "Black", "White")
            canvas.draw_text(str(cards[i]), (i*50+11, 69), 55, "Black")
        else:
            canvas.draw_polygon([[i*50, 0], [(i+1)*50, 0], [(i+1)*50, 100], [i*50, 100]], 1, "Black", "Blue")
    label.set_text("Turns = " + str(moves))
    
# create frame and add a button and labels
frame = simplegui.create_frame("Memory", 800, 100)
frame.add_button("Reset", new_game)
label = frame.add_label("Turns = 0")

# register event handlers
frame.set_mouseclick_handler(mouseclick)
frame.set_draw_handler(draw)

# get things rolling
new_game()
frame.start()
