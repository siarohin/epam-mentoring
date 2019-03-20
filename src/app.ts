const pizzas = [
    {
        name: 'Pepperoni',
        toppings: ['pepperoni'],
    }
];

const mappedPizzas = pizzas.map(pizza => pizza.name.toUpperCase());

console.log(mappedPizzas);

const pizza = {
    name: 'Blazing Inferno',
    getName: () => console.log(pizza.name),
};

pizza.getName();
