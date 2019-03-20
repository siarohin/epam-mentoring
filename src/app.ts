let selectedTopping: string = 'pepperoni';

const selectTopping = (topping: string): void => {
    selectedTopping = topping;
};

selectTopping('bacon');
console.log(selectedTopping);