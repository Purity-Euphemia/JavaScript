function printReverse(array){
	let newArray = [];

	for(let count = 0; count < array.length; count++){
		newArray[count] = array[array.length - 1 - count];
}
	return newArray;


}

const value = [1, 2, 3, 4, 5, 6];
const result = printReverse(value);
console.log(result);