function findFactors(num) {
	let factors = [];
	let index = 0;

for(let count = 1; count <= num; count++) {
	if(num % count === 0) {
	factors[index] = count;
	index++;

}


}

	return factors;

}

console.log(findFactors(12));