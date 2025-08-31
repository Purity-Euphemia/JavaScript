function newElement(array1, array2){
	let result = array1.concat(array2);
	return result;

}

let value1 = [1,2,3,4,5];
let value2 = [6,7,8,9,10];

let sumArray = newElement(value1, value2);
console.log(sumArray);