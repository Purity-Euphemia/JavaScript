const {getEvenNumbers, createCounter} = require("./functionForTest")


test("that the function returns even numbers", ()=>{
    const arrayOfNumbers = [1,2,3,4,5,6,7,8,9,10]; // Arrange
    const result = getEvenNumbers(arrayOfNumbers); // Act
    expect(result).toEqual([2,4,6,8,10]);
})
describe("createCounter", () =>{
    test("that the initial count is 0", ()=>{
        const counter =  createCounter();
        expect(counter.getCount()).toBe(0);
    })
    test("that the count increases by 1", ()=>{
        const counter =  createCounter();
        counter.increment()
        expect(counter.getCount()).toBe(1);
    })
    test("that the count increases by 2", ()=>{
        const counter =  createCounter();
        counter.increment()
        counter.increment()
        expect(counter.getCount()).toBe(2);
    })
    test("that the count decreases by 2", ()=>{
        const counter =  createCounter();
        counter.increment()
        counter.decrement()
        expect(counter.getCount()).toBe(0);
    })
    test("that the count reset to 0 ", ()=>{
        const counter =  createCounter();
        counter.increment()
        counter.reset()
        expect(counter.getCount()).toBe(0);
    })
})