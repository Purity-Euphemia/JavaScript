	console.log();
	console.log("WELCOME TO SEMICOLON ASSIGNMENT");
	console.log();
	console.log("QUESTIONS.");

	let counter1 = 0;
	let counter2 = 0;
	let count = 0;
	for(count = 1; count < 10; count++) {


	console.log("Pick from 1 to 10.");
	let menu = input.nextInt();
	
	switch(menu) {
	case 1: {
	String question1 = """

	Question(NO1). "what number matches this alphabet "A"???"

	1. Cat.
	2. Ball.
	3. Apple.
	4. Egg.
	5. Esey.

	""";
	console.log(question1);
	let list = input.nextInt();
	let answer = 3;

	if (list == answer) {
		console.log("correct");
		counter2++;
}
	else {
		console.log("wrong");
		counter1++;
}	

}	
	break;


	case 2: {
	String question1 = """

	Question(NO2). "what number matches this alphabet "B"???"

	1. Cat.
	2. Ball.
	3. Apple.
	4. Egg.
	5. Esey.

	""";
	console.log(question1);
	let list2 = input.nextInt();
	let answer = 2;

	if (list2 == answer) {
		console.log("correct");
		counter2++;
}
	else {
		console.log("wrong");
		counter1++;	

}	
	break;
}

	case 3: {
	String question1 = """

	Question(NO3). "what number matches this alphabet "C"???"

	1. Cat.
	2. Ball.
	3. Apple.
	4. Egg.
	5. Esey.

	""";
	console.log(question1);
	let list3 = input.nextInt();
	let answer = 1;

	if (list3 == answer) {
		console.log("correct");
		counter2++;
}
	else {
		console.log("wrong");
		counter1++;
}	
	break;
}

	case 4: {
	String question1 = """

	Question(NO4). "what number matches this alphabet "D"???"

	1. Cat.
	2. Ball.
	3. Apple.
	4. Egg.
	5. Dog.

	""";
	console.log(question1);
	let list4 = input.nextInt();
	let answer = 5;

	if (list4 == answer) {
		console.log("correct");
		counter2++;
}
	else {
		console.log("wrong");
		counter1++;	

}	
	break;
}

	case 5: {
	String question1 = """

	Question(NO5). "what number matches this alphabet "E"???"

	1. Cat.
	2. Ball.
	3. Apple.
	4. Egg.
	5. Dog.

	""";
	console.log(question1);
	let list5 = input.nextInt();
	let answer = 4;

	if (list5 == answer) {
		console.log("correct");
		counter2++;
}
	else {
		console.log("wrong");
		counter1++;	

}	
	break;
}

	case 6: {
	String question1 = """

	Question(NO6). "what number matches this alphabet "Z"???"

	1. Cat.
	2. Fish.
	3. Apple.
	4. Sweet.
	5. Zen.

	""";
	System.out.println(question1);
	let list6 = input.nextInt();
	let answer = 5;

	if (list6 == answer) {
		console.log("correct");
		counter2++;
}
	else {
		console.log("wrong");
		counter1++;	

}	
	break;
}

	case 7: {
	String question1 = """

	Question(NO7). "what number matches this alphabet "S"???"

	1. Cat.
	2. Fish.
	3. Apple.
	4. Sweet.
	5. Zen.

	""";
	System.out.println(question1);
	let list7 = input.nextInt();
	let answer = 4;

	if (list7 == answer) {
		console.log("correct");
		counter2++;
}
	else {
		console.log("wrong");
		counter1++;	

}	
	break;
}


	case 8: {
	String question1 = """

	Question(NO8). "what number matches this alphabet "F"???"

	1. Cat.
	2. Fish.
	3. Apple.
	4. Sweet.
	5. Zen.

	""";
	System.out.println(question1);
	let list8 = input.nextInt();
	let answer = 2;

	if (list8 == answer) {
		console.log("correct");
		counter2++;
}
	else {
		console.log("wrong");
		counter1++;	

}	
	break;
}

	case 9: {
	String question1 = """

	Question(NO9). "what number matches this alphabet "K"???"

	1. horn.
	2. Fish.
	3. Kinft.
	4. little.
	5. Zen.

	""";
	System.out.println(question1);
	let list9 = input.nextInt();
	let answer = 3;

	if (list9 == answer) {
		console.log("correct");
		counter2++;
}
	else {
		console.log("wrong");
		counter1++;
		

}	
	break;
}

	case 10: {
	String question1 = """

	Question(NO10). "what number matches this alphabet "L"???"

	1. horn.
	2. Fish.
	3. Kinft.
	4. little.
	5. Zen.

	""";
	System.out.println(question1);
	let list10 = input.nextInt();
	let answer = 4;
	if (list10 == answer) {
		console.log("correct");
		counter2++;

}
	else {
		console.log("wrong");
		counter1++;	

}	
	break;
}

}

}
	let totalCounter = counter1 + counter2;
	console.log("The number of wrong input: " + counter1 + " out of " + count);
	console.log("The number of correct input: " + counter2 + " out of " + count);
	console.log("The number of total question answer: " + totalCounter);
}
}