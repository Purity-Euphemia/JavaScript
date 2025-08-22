const getEvenNumbers = require("./functionForTest")


test("that the function returns even numbers", ()=>{
    const arrayOfNumbers = [1,2,3,4,5,6,7,8,9,10]; // Arrange
    const result = getEvenNumbers(arrayOfNumbers); // Act
    expect(result).toEqual([2,4,6,8,10]);

})
describe("createCounter", () => {
    test("that the initial value is 0", () => {
        const counter = createCounter(); // Arrange
        const result = counter(); // Act
        expect(result).toBe(0); // Assert
    })
})