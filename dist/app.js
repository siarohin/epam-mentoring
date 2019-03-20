"use strict";
var pizza = {
    name: 'pepperoni',
    price: 200,
    getName: function () {
        return this.name;
    }
};
console.log(pizza.getName());
var toppings = ['pepperoni'];
var order = {
    pizza: pizza,
    toppings: toppings,
};
function createOrder(pizza, toppings) {
    return { pizza: pizza, toppings: toppings };
}
console.log(createOrder(pizza, toppings));
