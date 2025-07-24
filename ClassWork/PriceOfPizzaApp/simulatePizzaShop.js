function getPizzaPrice(pizza){
    let price = 0;
    let Pizza = [
        { name: "Pepperoni", price: 7000 },
        { name: "Veggie", price: 10000 },
        { name: "ChickenSuya", price: 15000 },
    ];
    for (let count = 0; count < Pizza.length; count++) {
        if (pizza.name === Pizza[count].name) {
            return Pizza[count].price * pizza.quantity;
        }
    }
    return 0;
}
module.exports = {getPizzaPrice};
//console.log(getPizzaPrice({name: "Pepperoni", quantity: 2}));