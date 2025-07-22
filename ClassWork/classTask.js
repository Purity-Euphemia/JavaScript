function largestWorld (word){
     let currentWord = "";
	 let largest = "";

for (let count = 0; count < word.length; count++) {
	if (word[count] === " ") {
		if (largest.length > currentWord.length) {
			 currentWord = largest;
		}
		largest = "";
	}
	else {
		largest += word[count];
	}

}
	if(word.length > largest.length) {
		currentWord = largest;
}
	return largest;
}


console.log(largestWorld("Ade is going to Semicolon"));




