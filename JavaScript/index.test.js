const getEvenNumbers = require("./functionForTest")


test("that the function returns even numbers", ()=>{
    const arrayOfNumbers = [1,2,3,4,5,6,7,8,9,10]; // Arrange
    const result = getEvenNumbers(arrayOfNumbers); // Act
    expect(result).toEqual([2,4,6,8,10]);

})