"use strict";
var selectedTopping = 'pepperoni';
var selectTopping = function (topping) {
    selectedTopping = topping;
};
selectTopping('bacon');
console.log(selectedTopping);
