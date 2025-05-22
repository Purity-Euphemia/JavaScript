let array = [2, 3, 4, 5, 6];
let obj = {
	color: "blue",
	age: 12,
	isValid: true
};

for(let key in obj){
	console.log(obj[key])

};

for(let index in array){
	console.log(array[index])

};