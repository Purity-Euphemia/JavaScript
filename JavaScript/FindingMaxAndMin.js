let numbers = [4, 7, 1, 9, -2, 5];

let max = numbers[0];
let min = numbers[0];

for(let count = 1; count < numbers.length; count++) {
	if(numbers[count] > max) {
	max = numbers[count];

}
	if(numbers[count] < min) {
	min = numbers[count];


}

}

console.log("Max: ", max);
console.log("Min: ", min);