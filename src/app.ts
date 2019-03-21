type CustomSizes = 'small' | 'medium' | 20;
type Callback = (size: CustomSizes) => void;


let pizzaSize: CustomSizes = 20;

const selectSize: Callback = (x) => {
    pizzaSize = x;
}

selectSize(pizzaSize);

console.log(pizzaSize);
