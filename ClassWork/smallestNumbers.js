function smallestNumber(number) {
    let multiply = " ";

    for (let count = 1; count < 9; count++) {
        if((count * (count - 1)) == number) {
            multiply = count + " " + (count - 1);
        }    
    }
    return multiply;
}


console.log(smallestNumber(12));