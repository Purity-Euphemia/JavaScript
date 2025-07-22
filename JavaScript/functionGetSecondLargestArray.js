function GetSecondLargest(array) {
	let value = array.length;

	let largest = -1, secondLargest = -1;

	for (let count = 0; count < value; count++) {
		if (array[count] > largest)
		largest = array[count];


} 

	for (let count = 0; count < value; count++) {
		if (array[count] > secondLargest && array[count] !== largest) {
			secondLargest = array[count];


}


}

	return secondLargest;


}

let array = [12, 35, 1, 10, 34, 1];
console.log(GetSecondLargest(array));