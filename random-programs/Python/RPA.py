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
