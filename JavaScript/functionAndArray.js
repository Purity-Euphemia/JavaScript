function HasElement(array, element){

for(var count = 0; count < array.length; count++){

	if (array[count] === element) {

	return true;


}
}
	return false;

}






console.log(HasElement([1, 2, 3], 2));
console.log(HasElement([1, 2, 3], 5));