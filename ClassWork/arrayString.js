let result = [];
result.push(1);
console.log(result);
result.push('hello')
console.log(result)
result.push('True')
console.log(result);
result.push({name: "john"});
console.log(result);

let item_pop = result.pop();
console.log("This is the item popped " + item_pop);
console.log(result);
let second_item_pop = result.pop();
console.log("This is the second item popped " + second_item_pop);
console.log(result);

let shift_item = result.shift();
console.log("This is the item shift" + shift_item);
console.log(result);

let un_shift_item = result.unshift("biro");
console.log("This is the item unshift" + un_shift_item);
console.log(result);


let new_array = ["Ade", "Fish", false, 25];

let join_array = result.concat(new_array)
console.log(join_array);


