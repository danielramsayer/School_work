import re

nums1 = []

with open('sum306251.txt') as text:
    for words in text:
        print re.findall(r"([0-9]*)", text)
        """nums1.append([adding])
        b = sum(nums1)

print b"""
