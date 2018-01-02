def SimpleAdding(num):
    total = 0
    start = 1
    while start <= num:
        total += start
        start += 1
    return total

# keep this function call here
print SimpleAdding(raw_input())
