
// function getEvenNumbers(array){
//     let newArray = [];
//     for(let count= 0;count < array.length;count++){
//             if(array[count] % 2 === 0){
//                 newArray.push(array[count]);
//             }
//         }
//         return newArray;
//
//
// }


function  getEvenNumbers(array) {
    return array.filter((num) => (num % 2 === 0));
}
const createCounter = function (params) {
    let count = 0;
    return {
        getCount:()=>{
            return count;
        },
        increment:()=>{
            count += 1;
        },
        decrement:()=>{
            count -= 1;
        },
        reset:()=>{
            count = 0;
        }
    }
}
module.exports = {getEvenNumbers, createCounter}

//let numbers = [1,2,3,4,5,6,7,8,9,10];
//console.log(getEvenNumbers(numbers));