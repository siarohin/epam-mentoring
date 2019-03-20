"use strict";
var summAll = function () {
    var array = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        array[_i] = arguments[_i];
    }
    return array.reduce(function (acc, item) { return acc + item; });
};
var summator = summAll(1, 2, 3, 4, 5, 6, 7);
console.log(summator);
