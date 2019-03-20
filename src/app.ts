const pizzas: number = 5;

const orderDiscount = (orders: number): boolean => {
    return orders >=3;
};

if (orderDiscount(pizzas)) {
    console.log(`You're entitled to a discount`);
} else {
    console.log(`Order more pizzas for a discount`);
}

orderDiscount(pizzas);