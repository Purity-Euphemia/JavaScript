function removeInvalidPriorityNumberSecond(array) {
    let arr = " "
    for (let count = 0; count < array.length; count++) {
        if (array[count] > 1 && array[count] <= 5) {
            arr.push(array[count]) + " ";
        }
    }
}

const array = [1,2,3,4,5,6,7,8,9,10];
result =  removeInvalidPriorityNumberSecond(array);
console.log(result);





