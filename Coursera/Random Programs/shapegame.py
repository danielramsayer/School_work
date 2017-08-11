import pygame, sys
from pygame.locals import *

pygame.init()
screen = pygame.display.set_mode((600,600),0,32)

while True:
    for event in pygame.event.get():
        if event.type == QUIT:
            pygame.quite()
            sys.exit()

    screen.lock()
    pygame.draw.rect(screen, (140,240,145), Rect((100,100),(100,100))) 
    screen.unloc
    k()

    pygame.display.update()
