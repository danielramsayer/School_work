/*
Reverse digits of an integer.

Example1: x = 123, return 321
Example2: x = -123, return -321

click to show spoilers.

Note:
The input is assumed to be a 32-bit signed integer. Your function should return 0 when the reversed integer overflows.

top and bottom range for 32 bit signed int: 2147483647, -2147483647.
*/

function reverse(x) {
    var total;
    max = 2147483647;
    x = x.toString();
    if (x[0] == '-') {
        x = x.slice(1,x.length)
        let reversed = x.split("").reverse().join("")
        total = parseInt("-" + reversed);
    } else {
        let reversed = x.split("").reverse().join("")
        total = parseInt(reversed);
    }
    return (total >> 0 === total) ? total : 0;
} 
