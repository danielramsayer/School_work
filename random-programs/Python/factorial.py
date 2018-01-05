#Some easy warm up code from CodeByte
def FirstFactorial(num):
    total = 1
    while num >= 1:
        total *= num
        num -= 1
    return total

print FirstFactorial(raw_input())
