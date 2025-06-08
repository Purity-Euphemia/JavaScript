function mergeAndSortDecending(array1, array2) {
	let combined = [];

	let index = 0;
	for (let count = 0; count < array1.length; count++) {
		combined[index] = array1[count];
		index++;


}


	for (let counter = 0; counter < array2.length; counter++) {
		combined[index] = array2[counter];
		index++;


}

	for(let count = 0; count < combined.length - 1; count++) {
	for(let counter = count; counter < combined.length; counter++) {
		if (combined[count] < combined[counter]) {


		let temp = combined[count];
		combined[count] = combined[counter];
		combined[counter] = temp;

}


}
}

	return combined;
}



	let list1 = [4, 1, 7];
	let list2 = [2, 9, 5];
	let result = mergeAndSortDecending(list1, list2);
	console.log(result);



