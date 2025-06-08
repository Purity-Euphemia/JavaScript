function largest(array) {
	let max = array[0];

for (let count = 1; count < array.length; count++)
	if (array[count] > max)
	max = array[count];

return max;


}

const array = [10, 324, 45, 90, 9808];
console.log(largest(array));