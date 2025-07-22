function arrayNameAndScore(array) {
    let arr = []
    for (let count = 0; count < array.length; count++) {
        if (array[count].score > 80 && array[count].score <= 100) {
            arr.push(array[count].name);
        }
    }
    return arr;
}
    let array = [{name: "chioma", score: 95}, {name: "chika", score: 34}, {name: "asa", score: 90}];
    result = arrayNameAndScore(array);
    console.log(result);





