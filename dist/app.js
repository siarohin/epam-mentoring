var pizza;
pizza = {
    name: 'pepperoni',
    size: 'medium',
    cost: 500,
    box: true,
    getName: function () {
        return this.name;
    },
    getCost: function () {
        return this.cost;
    }
};
console.log(pizza.getName());
console.log(pizza.getCost());
console.log(typeof pizza.getCost()); // ???
