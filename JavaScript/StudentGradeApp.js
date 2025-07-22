const prompt = require("prompt-sync")();

let numberOfStudents = prompt("How many students? ");
numberOfStudents = numberOfStudents * 1;

let numberOfSubjects = prompt("How many subjects? ");
numberOfSubjects = numberOfSubjects * 1;

let scores = [];

for (let count = 0; count < numberOfStudents; count++) {
	console.log("\nStudent " + (count + 1));
	scores[count] = [];


	for (let counter = 0; counter < numberOfSubjects; counter++) {
		let score;


		do {
			score = prompt("Enter score for subject " + (counter + 1) + ": ");
			score = score * 1;

			if (score < 0 || score > 100) {
				console.log("Score must be between 0 and 100.");

			}

		} while (score < 0 || score > 100);
		
		scores[count][counter] = score;
	}


}


console.log("\n--- Class Summary ---");

for (let count = 0; count < numberOfStudents; count++) {
	let total = 0;

	for (let counter = 0; counter < numberOfSubjects; counter++) {
		total = total + scores[count][counter];


	}

	let average = total / numberOfSubjects;
	console.log("Student " + (count + 1) + ": " + "Total " + "= " + (total) + "," +  " Average " +  " = " + (average));

}



