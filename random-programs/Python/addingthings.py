#Some easy warm up code from CodeByte
def SimpleAdding(num):
    total = 0
    start = 1
    while start <= num:
        total += start
        start += 1
    return total

#call function
print SimpleAdding(raw_input())
