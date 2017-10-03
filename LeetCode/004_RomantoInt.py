"""
Given a roman numeral, convert it to an integer.

Input is guaranteed to be within the range from 1 to 3999.
"""
class Solution(object):
    def romanToInt(self, s):
        counter = 0
        for letter in s:
            if letter == "M":
                counter += 1000
            elif letter == "D":
                counter += 500
            elif letter == "C":
                counter += 100
            elif letter == "L":
                counter += 50
            elif letter == "X":
                counter += 10
            elif letter == "V":
                counter += 5
            elif letter == "I":
                counter += 1
            else:
                return "I'm sorry, that wasn't a roman numberal"
        if "IV" in s:
            counter -= 2
        if "IX" in s:
            counter -= 2
        if "XL" in s:
            counter -= 20
        if "XC" in s:
            counter -= 20
        if "CD" in s:
            counter -= 200
        if "CM" in s:
            counter -= 200

        return counter

    
