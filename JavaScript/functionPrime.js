function cPrime(n) {
    if (typeof n !== "number" || !Number.isInteger(n) || n <= 1) {
        console.log("Please enter a whole number greater than 1.");
        return;
    }

    let isPrime = true;
    for (let count = 2; count <= Math.sqrt(n); count++) {
        if (n % count === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(n + " is a Prime Number.");
    } else {
        console.log(n + " is a Non-Prime Number.");
    }
}


cPrime(12);  // You can change 17 to any number you'd like to test
