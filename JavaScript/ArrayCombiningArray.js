let arr1 = [1, 2];
let arr2 = [3, 4];


let combinedArr = [];

for(let count = 0; count < arr1.length; count++) {
	combinedArr[combinedArr.length] = arr1[count];


}

for(let counter = 0; counter < arr2.length; counter++) {
	combinedArr[combinedArr.length] = arr2[counter];



}
	console.log(combinedArr);