var pizzaSize = 'large';
// const selectSize = (size: any): void => {
//     pizzaSize = size;
// };
var selectSize = function (size) {
    pizzaSize = size;
};
console.log(pizzaSize);
// selectSize('meduuuum');
selectSize('medium');
console.log(pizzaSize);
