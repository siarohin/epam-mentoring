// let sumOrder: Function;

let sumOrder: (price: number, quantity?: number) => number;

sumOrder = (x, y = 10): number => {
    return y ? x * y : x;
}

const sum = sumOrder(25);

console.log(sum);