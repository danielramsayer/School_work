/*
Given two strings A and B, find the minimum number of times A has to be repeated such that B is a substring of it. If no such solution, return -1.

For example, with A = "abcd" and B = "cdabcdab".

Return 3, because by repeating A three times (“abcdabcdabcd”), B is a substring of it; and B is not a substring of A repeated two times ("abcdabcd").

Note:
The length of A and B will be between 1 and 10000.
*/


var count = 0;

function repeatedStringMatch(A, B) {
    var foundit = false;
    var check = A;
    if (check.length < 10000) {
      while (foundit === false){
          if (check.includes(B)) {
              foundit = true;
              count += 1;
          } else {
              check += A;
              count += 1;
          }
      }
    } else {
      return -1;
    }
    return count;
};
