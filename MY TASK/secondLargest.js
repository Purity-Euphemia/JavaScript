function secondLargest(array) {
    let largest = 0;
    let secondLargest = 0;

    for (let count = 0; count < array.length; count++) {
        if (array[count] > largest) {
            secondLargest = largest;
            largest = array[count];
        } else if (array[count] > secondLargest && array[count] !== largest) {
            secondLargest = array[count];
        }
    }

    return secondLargest;
}


let value = [10, 38, 78, 90, 4, 57, 22, 100];
console.log("Second largest:", secondLargest(value));
