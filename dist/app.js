"use strict";
var pizzas = [
    {
        name: 'Pepperoni',
        toppings: ['pepperoni'],
    }
];
var mappedPizzas = pizzas.map(function (pizza) { return pizza.name.toUpperCase(); });
console.log(mappedPizzas);
var pizza = {
    name: 'Blazing Inferno',
    getName: function () { return console.log(pizza.name); },
};
pizza.getName();
