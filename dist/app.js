"use strict";
// <!-- never going to return a value -->
var orderError = function (error) {
    throw new Error(error);
};
orderError("Something was wrong");
