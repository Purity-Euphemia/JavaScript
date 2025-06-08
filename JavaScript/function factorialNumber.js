function factorial(value) {
	let result = 1;
for(let count = 2; count <= value; count++) {
	result = result * count;

}
	return result;

}

console.log("Factorial of 5: ", factorial(5));