const {getPizzaPrice} = require("./simulatePizzaShop");


describe("getPizzaPrice", () => {
    test("returns correct price for one Pepperoni pizza", ()=>{
        const pizza = {name: "Pepperoni", quantity: 1};
        expect(getPizzaPrice(pizza)).toBe(7000);
    })
    test("returns correct price for two Pepperoni pizza", ()=>{
        const pizza = {name: "Pepperoni", quantity: 2};
        expect(getPizzaPrice(pizza)).toBe(14000);
    })
    test("returns correct price for three ChickenSuya pizza", ()=>{
        const pizza = {name: "ChickenSuya", quantity: 3};
        expect(getPizzaPrice(pizza)).toBe(45000);
    })
    test("returns 0 for unknown pizza", ()=>{
        const pizza = {name: "Unknown", quantity: 1};
        expect(getPizzaPrice(pizza)).toBe(0);
    })
})
