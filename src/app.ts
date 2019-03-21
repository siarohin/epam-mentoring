// let sumOrder: Function;

let sumOrder: (price: number, quantity?: number) => number;

sumOrder = (x, y): number => {
    return y ? x * y : x;
}

const sum = sumOrder(25, 10);

console.log(sum);