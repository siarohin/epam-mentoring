function multiply(a: number, b = 5): number {
    return a * b;
}

console.log(multiply(5));
console.log(multiply(5, 10));