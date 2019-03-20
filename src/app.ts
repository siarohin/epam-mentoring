const pizza = {
    name: 'pepperoni',
    price: 200,
    getName() {
        return this.name;
    }
};

console.log(pizza.getName());

const toppings = ['pepperoni'];

const order = {
    pizza,
    toppings,
};

function createOrder(pizza: any, toppings: any) {
    return { pizza, toppings };
}

console.log(createOrder(pizza, toppings));