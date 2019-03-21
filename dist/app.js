// let sumOrder: Function;
var sumOrder;
sumOrder = function (x, y) {
    if (y === void 0) { y = 10; }
    return y ? x * y : x;
};
var sum = sumOrder(25);
console.log(sum);
