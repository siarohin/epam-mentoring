let pizza: {name: string, size: string, cost: number, box?: boolean, getName(): string, getCost(): string};

pizza = {
    name: 'pepperoni',
    size: 'medium',
    cost: 500,
    box: true,
    getName() {
        return this.name;
    },
    getCost() {
        return this.cost;
    }
};

console.log(pizza.getName());

console.log(pizza.getCost());

console.log(typeof pizza.getCost()); // ???