#This was prompted by Mathematical Thinking in Computer Science Coursera course, week two, video 4.


i = 100000

while i <= 100999:
    if (i % 9127 == 0):
        print i
        i += 1
    else:
        i += 1

#faster solution, but not as formulaic
n = float(100000) / 9127
m = int(round(n))
print m*9127
