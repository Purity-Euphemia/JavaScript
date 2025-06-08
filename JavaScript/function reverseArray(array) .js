function reverseArray(array) {

	let left = 0, right = array.length - 1;

	while (left < right) {

		[array[left], array[right]] = [array[right], array[left]];


		left++;

		right--;


}


}

const array = [1, 4, 3, 2, 6, 5];

	reverseArray(array);

console.log(array.join(" "));