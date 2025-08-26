function reverseArray2(arr) {
    let result = [];

    for (let count = 0; count < arr.length; count++) {
        result[count] = arr[arr.length - count - 1];
    }

    return result;
}

let numbers = [1, 2, 3, 4, 5, 6];
console.log(reverseArray2(numbers));