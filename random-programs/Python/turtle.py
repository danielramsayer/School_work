import turtle

def drawsquare(aturtle):
    for i in range(1,5):
        aturtle.forward(100)
        aturtle.right(90)

def drawtriangle(anotherturtle)
    for i in range(1,4):
        anotherturtle.forward(100)
        anotherturtle.left(120)

def drawshapes():
    window = turtle.Screen()
    window.bgcolor("green")
    
    brad = turtle.Turtle()    
    brad.shape("turtle")
    brad.color("orange")
    brad.speed(5)
    drawsquare(brad)
    
    angela = turtle.Turtle()
    angela.shape("arrow")
    angela.color("yellow")
    angela.speed(1)
    angela.circle(100)
    
    monty = turtle.Turtle()
    monty.shape("circle")
    monty.color("red")
    monty.speed(2)
    drawtriangle(monty)
    
    
    window.exitonclick()    
    

drawshapes()