const summAll = (...array:number[]) => array.reduce((acc:number, item:number) => acc + item);

const summator = summAll(1, 2, 3, 4, 5, 6, 7);
console.log(summator);
