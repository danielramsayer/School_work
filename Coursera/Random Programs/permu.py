import itertools

houses = [1,2,3,4,5]
orderlings = permutations(houses, r=None)
for (red,green,ivory,yellow,blue) in orderlings:
    print orderlings
