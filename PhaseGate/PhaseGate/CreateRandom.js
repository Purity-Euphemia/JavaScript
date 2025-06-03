const prompt = require("prompt-sync")();

let counter1 = 0;
let counter2 = 0;

for(let counter = 0; counter <= 10; counter++) {

let substractOne = Math.floor(Math.random() * 100);
let substractTwo = Math.floor(Math.random() * 100);

console.log("what is " +  substractOne + " - " + substractTwo);

let userInput = prompt("what is ?");

	let result = substractOne - substractTwo;


	if (userInput != result){
		console.log("invalid number")
		counter1++
}

	if (userInput == result){
		console.log("correct")
		counter2++

}
	
}	
	console.log("the number of correct input" + counter1)
	console.log("the number of wrong input" + counter2)