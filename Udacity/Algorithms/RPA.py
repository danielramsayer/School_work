#Russian Peasants Algo
def Peasants (a,b):
    x = a; y = b
    z = 0
    while x > 0:
        #This timesing algorythm works by selecting if x is even, halving that, then doubling y. If x is odd, the value of y is added to z, y is doubled for the next iteration.
        if x % 2 = 1: z = z + y
        y = y << 1
        x = x >> 1
    return z

#Example of the sequence
"""
20, 7
x = 20, y = 7
z = 0
x > 0
x != odd
y = y * 2 (14)
x = 10
x != odd
y = 28
x = 5
x = odd
z = 0 + 28
y = 56
x = 2
x != odd
y = 112
x = 1
x = odd
z = 28 + 112
y = 224
x = 0
returns z = 140
20 * 7 = 140
"""
