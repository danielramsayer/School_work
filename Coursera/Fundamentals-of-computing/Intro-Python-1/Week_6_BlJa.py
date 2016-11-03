# Mini-project #6 - Blackjack

import simplegui
import random

# load card sprite - 936x384 - source: jfitz.com
CARD_SIZE = (72, 96)
CARD_CENTER = (36, 48)
card_images = simplegui.load_image("http://storage.googleapis.com/codeskulptor-assets/cards_jfitz.png")

CARD_BACK_SIZE = (72, 96)
CARD_BACK_CENTER = (36, 48)
card_back = simplegui.load_image("http://storage.googleapis.com/codeskulptor-assets/card_jfitz_back.png")    

# initialize some useful global variables
in_play = False
outcome = ""
dealers_score = 0
players_score = 0

# define globals for cards
SUITS = ('C', 'S', 'H', 'D')
RANKS = ('A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K')
VALUES = {'A':1, '2':2, '3':3, '4':4, '5':5, '6':6, '7':7, '8':8, '9':9, 'T':10, 'J':10, 'Q':10, 'K':10}


# define card class
class Card:
    def __init__(self, suit, rank):
        if (suit in SUITS) and (rank in RANKS):
            self.suit = suit
            self.rank = rank
        else:
            self.suit = None
            self.rank = None
            print "Invalid card: ", suit, rank

    def __str__(self):
        return self.suit + self.rank

    def get_suit(self):
        return self.suit

    def get_rank(self):
        return self.rank

    def draw(self, canvas, pos):
        card_loc = (CARD_CENTER[0] + CARD_SIZE[0] * RANKS.index(self.rank), 
                    CARD_CENTER[1] + CARD_SIZE[1] * SUITS.index(self.suit))
        canvas.draw_image(card_images, card_loc, CARD_SIZE, [pos[0] + CARD_CENTER[0], pos[1] + CARD_CENTER[1]], CARD_SIZE)
        
# define hand class
class Hand:
    def __init__(self):
        # create Hand object
        self.cards = []

    def __str__(self):
        # return a string representation of a hand
        hand = ""
        for card in self.cards:
            hand += " " + card.__str__()
        return "Hand contains " + hand

    def add_card(self, card):
        # add a card object to a hand
        self.cards.append(card)

    def get_value(self):
        # count aces as 1, if the hand has an ace, then add 10 to hand value if it doesn't bust
        # compute the value of the hand, see Blackjack video
        value = 0
        Ace = False      
        for card in self.cards:
            rank = card.get_rank()
            value += VALUES[rank]
            if rank == 'A':
                Ace = True
        if (value < 11 and Ace):
            #per prof's instructions:
            value += 10            
        return value
   
    def draw(self, canvas, pos):
        # draw a hand on the canvas, use the draw method for cards
        for card in self.cards:
            card.draw(canvas, pos)
            pos[0] += 80
 
        
# define deck class 
class Deck:
    def __init__(self):
        # create a Deck object
        self.cards = []
        for suit in SUITS:
            for rank in RANKS:
                self.cards.append(Card(suit,rank)) 

    def shuffle(self):
        # shuffle the deck 
        random.shuffle(self.cards)    # use random.shuffle()

    def deal_card(self):
        return self.cards.pop(0)# deal a card object from the deck
    
    def __str__(self):
        # return a string representing the deck
        deck = ""
        for card in self.cards:
            deck += " " + card.__str__()
        return "Deck has " + deck


#define event handlers for buttons
def deal():
    global outcome, in_play, deck, players_hand, dealers_hand, players_score, dealers_score
    if(in_play == True):
        outcome = "Ya ain't started yet, lose a point!"
        dealers_score += 1
        in_play = False
    else:
        deck = Deck()
        deck.shuffle()
        outcome = ""

        players_hand = Hand()
        players_hand.add_card(deck.deal_card())
        players_hand.add_card(deck.deal_card())

        dealers_hand = Hand()
        dealers_hand.add_card(deck.deal_card())
        dealers_hand.add_card(deck.deal_card())

        in_play = True

def hit():
    # replace with your code below
    global in_play, players_hand, outcome, deck, dealers_score, players_score
    
    # if the hand is in play, hit the player
    if in_play:
        players_hand.add_card(deck.deal_card())
    
    # if busted, assign a message to outcome, update in_play and score
    if players_hand.get_value() > 21:
        outcome = "You done lost there, pardner"
        dealers_score += 1 
        in_play = False
    
def stand():
    global outcome, players_score, dealers_score, in_play

    in_play = False

    while dealers_hand.get_value() < 17:
        dealers_hand.add_card(deck.deal_card())

    if dealers_hand.get_value() > 21:
        outcome = "Dealer done busted, wanna play again?"
        players_score += 1
    else:
        if dealers_hand.get_value() >= players_hand.get_value() or players_hand.get_value() >= 22:
            outcome = "Dealers Win! Crimeny, wanna play again?"
            dealers_score += 1
        else:
            outcome = "Well blow me over, looks like ya won!"
            players_score += 1
   
# draw handler    
def draw(canvas):
    global dealers_score, players_score
    # test to make sure that card.draw works, replace with your code below
    canvas.draw_text("BlackJack", [220, 60], 40, "Red")
    
    dealers_hand.draw(canvas, [100, 150])
    players_hand.draw(canvas, [100, 300])
    
    canvas.draw_text(outcome, [20,110], 30, "Black")
    
    canvas.draw_text("Dealer: %s" % dealers_score, [10, 200], 20 ,"Black")
    canvas.draw_text("Player: %s" % players_score, [10, 350], 20 ,"Black")
    
    if in_play:
        canvas.draw_image(card_back, CARD_BACK_CENTER, CARD_BACK_SIZE, (136,199), CARD_BACK_SIZE)
                      
#    card = Card("S", "A")
#    card.draw(canvas, [300, 300])


# initialization frame
frame = simplegui.create_frame("Blackjack", 600, 600)
frame.set_canvas_background("Green")

#create buttons and canvas callback
frame.add_button("Deal", deal, 200)
frame.add_button("Hit",  hit, 200)
frame.add_button("Stand", stand, 200)
frame.set_draw_handler(draw)


# get things rolling
deal()
frame.start()
