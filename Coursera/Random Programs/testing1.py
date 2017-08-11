largest = None
smallest = None
while True:
    num = raw_input("Enter a number: ")
    if num == "done" : break
    try:
        if num > float(largest):
            largest = num
        elif num < float(smallest):
            smallest = num
    except:
        print "Invalid input"

print "Maximum", largest
print "Minimum", smallest
