"""
Given two strings A and B, find the minimum number of times A has to be repeated such that B is a substring of it. If no such solution, return -1.

For example, with A = "abcd" and B = "cdabcdab".

Return 3, because by repeating A three times (“abcdabcdabcd”), B is a substring of it; and B is not a substring of A repeated two times ("abcdabcd").

Note:
The length of A and B will be between 1 and 10000.
"""
class Solution(object):
    def repeatedStringMatch(self, A, B):
        counter = 0
        foundit = False
        check = A
        while foundit == False:
            if B in check:
                foundit = True
                counter += 1
                return counter
            elif len(check) > 10000:
                return -1
            else:
                check += A
                counter += 1

repeatedStringMatch('a','aa')
