#This program is to count pairs from an array.

def sockMerchant(n, ar):
    pairs = 0
    tempHold = []
    for i in ar:
        if i not in tempHold:
            tempHold.append(i)
        else:
            pairs += 1
            tempHold.remove(i)
    return pairs
