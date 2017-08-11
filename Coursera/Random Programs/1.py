"""import turtle

def drawsquare(aturtle):
    for i in range(1,5):
        aturtle.forward(100)
        aturtle.right(90)

def drawshapes():
    window = turtle.Screen()
    window.bgcolor("blue")
    i = 0
    brad = turtle.Turtle()    
    brad.shape("turtle")
    brad.color("orange")
    brad.speed(2)
    while i < 37:
        drawsquare(brad)
        brad.right(10)
        i += 1
    
    window.exitonclick()  
    

drawshapes() """ 

sentence = "The quick brown fox jumps over the lazy dog. But the dog totally deserved it."

def counting():
    splitting = sentence.split()
    print(splitting)