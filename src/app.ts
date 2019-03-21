// type Pizza = {
//     name: string,
//     size: string[],
// }

interface Pizza {
    name: string,
    size: string[],
}

interface Pizzas {
    data: Pizza[],
}

let pizza: Pizza;

const createPizza = (name: string, size: string[]) => {
    return {
        name,
        size,
    };
}

pizza = createPizza('pepperoni', ['small', 'medium', 'large']);

console.log(pizza);