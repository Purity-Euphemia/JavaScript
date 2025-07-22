function HasElement(array, element){

for(var count = 0; count < array.length; count++){

	if (array[count] === element) {

	return true;

} else {

	console.log(array[count] + " is not equal to " + element);

}

}

	
return false;



}




console.log(HasElement(["apple", "banana", "orange"], "banana"));
console.log(HasElement(["apple", "banana", "orange"], "mango"));