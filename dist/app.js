// type Pizza = {
//     name: string,
//     size: string[],
// }
var pizza;
var createPizza = function (name, size) {
    return {
        name: name,
        size: size,
    };
};
pizza = createPizza('pepperoni', ['small', 'medium', 'large']);
console.log(pizza);
