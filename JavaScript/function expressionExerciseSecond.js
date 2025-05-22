//function expression.

let userName = "Ugbo";
let number = 12;

const greet = function(numberOne, name){

	let concat = numberOne + " " + name
	return concat

}

console.log(greet(number, userName));