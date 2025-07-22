function ReverseArray(array) {
	let value = array.length;

	let temp = new Array(value);

	for(let count = 0; count < value; count++)
		temp[count] = array[value - count - 1];

	for(let count = 0; count < value; count++)
		array[count] = temp[count];

}


const array = [1, 4, 3, 2, 6, 5];

ReverseArray(array);

console.log(array.join(" "));