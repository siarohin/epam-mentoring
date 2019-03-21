type Pizza = {name: string, size: number};

const pizza: Pizza = {
    name: 'pepperoni',
    size: 30,
};

const serialized = JSON.stringify(pizza);

console.log(serialized);

const getNameFromJSON = (obj: string) => (JSON.parse(obj) as Pizza).name;

console.log(getNameFromJSON(serialized));