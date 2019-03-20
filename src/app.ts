// let sumOrder: Function;

let sumOrder: (price: number, quantity: number) => number;

sumOrder = (x, y): number => x * y;

const sum = sumOrder(25, 5);

console.log(sum);