const sizes: [string, number, boolean] = ['large', 200, true];

const[first, ...args] = sizes;
console.log(first);