// #1 Fibonacci numbers


// #2 greatest common divisor
const eucl = ( a, b) => {
	console.log(a, b);
	if (b == 0) { return a }
	else { return eucl(b, a % b) };
}
