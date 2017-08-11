bgimage = "E:/Downloads/bg.jpeg"
mimage = "E:/Downloads/ball.png"

import pygame, sys
from pygame.locals import *

pygame.init()
screen = pygame.display.set_mode((550,700),0,32)

background = pygame.image.load(bgimage).convert()
mcurser = pygame.image.load(mimage).convert_alpha()

x,y=0,0
movex,movey=0,0

while True:
    for event in pygame.event.get():
        if event.type == QUIT:
            pygame.quit()
            sys.exit()
        if event.type == KEYDOWN:
            if event.key == K_LEFT:
                movex=-1
            elif event.key == K_RIGHT:
                movex=+1
            elif event.key == K_UP:
                movey=-1
            elif event.key == K_DOWN:
                movey=+1
        if event.type == KEYUP:
            if event.key == K_LEFT:
                movex=0
            elif event.key == K_RIGHT:
                movex=0
            elif event.key == K_UP:
                movey=0
            elif event.key == K_DOWN:
                movey=0
    x+=movex
    y+=movey

    screen.blit(background, (0,0))

#--if you want to have the mouse control the ball, unzero this section
#    x,y = pygame.mouse.get_pos()
#    x-= mcurser.get_width()/2
#    y-= mcurser.get_height()/2

    screen.blit(mcurser, (x,y))

    pygame.display.update()
