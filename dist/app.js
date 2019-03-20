"use strict";
var pizzas = 5;
var orderDiscount = function (orders) {
    return orders >= 3;
};
if (orderDiscount(pizzas)) {
    console.log("You're entitled to a discount");
}
else {
    console.log("Order more pizzas for a discount");
}
orderDiscount(pizzas);
