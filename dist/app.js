var pizza = {
    name: 'pepperoni',
    size: 30,
};
var serialized = JSON.stringify(pizza);
console.log(serialized);
var getNameFromJSON = function (obj) { return JSON.parse(obj).name; };
console.log(getNameFromJSON(serialized));
