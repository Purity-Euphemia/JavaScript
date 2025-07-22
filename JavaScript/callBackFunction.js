// function higherFunction() {
//     console.log("Higher Function");
// }
//
// function lowerFunction(callBack) {
//     console.log("Lower Function");
//     callBack()
// }
//
// lowerFunction(higherFunction);


function add(x, y) {
    return x + y;
}
function multiply(a, b) {
    return a * b;
}
function operation(callBack, x, y) {
    return callBack(x, y);
}
console.log(operation(add,2,3));
console.log(operation(multiply,3,4));