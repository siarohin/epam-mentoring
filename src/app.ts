let pizzaSize: string = 'large';

// const selectSize = (size: any): void => {
//     pizzaSize = size;
// };

const selectSize = (size: 'small' | 'medium' | 'large'): void => {
    pizzaSize = size;
};

console.log(pizzaSize);

// selectSize('meduuuum');

selectSize('medium');

console.log(pizzaSize);