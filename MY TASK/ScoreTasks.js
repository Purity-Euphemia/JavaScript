const prompt = require('prompt-sync')();

let scores = new Array(10);

// Task 1: 
let count = 0;
while (count < 10) {
  let answer = prompt("Enter score " + (count + 1) + ": ");
  let score = Number(answer);
  scores[count] = score;
  count = count + 1;
}

// Task 2: Print vertically
console.log("\nScores printed vertically:");
count = 0;
while (count < 10) {
  console.log(scores[count]);
  count = count + 1;
}

// Task 3: Print horizontally
console.log("\nScores printed horizontally:");
count = 0;
let line = "";
while (count < 10) {
  line = line + scores[count] + " ";
  count = count + 1;
}
console.log(line);

// Task 4: Get elements at even indexes
let evenIndexes = new Array(5);
count = 0;
let counter = 0;
while (count < 10) {
  if (count % 2 === 0) {
    evenIndexes[counter] = scores[count];
    counter = counter + 1;
  }
  count = count + 1;
}

// Task 5: Get elements at odd indexes
let oddIndexes = new Array(5);
count = 0;
counter = 0;
while (count < 10) {
  if (count % 2 === 1) {
    oddIndexes[counter] = scores[count];
    counter = counter + 1;
  }
  count = count + 1;
}

// Task 6: Sum of even index elements
let sumEven = 0;
count = 0;
while (count < 5) {
  sumEven = sumEven + evenIndexes[count];
  count = count + 1;
}

// Task 7: Sum of odd index elements
let sumOdd = 0;
count = 0;
while (count < 5) {
  sumOdd = sumOdd + oddIndexes[count];
  count = count + 1;
}

// Show final results
console.log("\nEven index elements:");
count = 0;
while (count < 5) {
  console.log(evenIndexes[count]);
  count = count + 1;
}

console.log("\nOdd index elements:");
count = 0;
while (count < 5) {
  console.log(oddIndexes[count]);
  count = count + 1;
}

console.log("\nSum of even index elements:", sumEven);
console.log("\nSum of odd index elements:", sumOdd);