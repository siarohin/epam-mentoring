// function Car(name: string) {
//     this.name = name;
//     this.count = 0;
// }

// Car.prototype.addNewCount = function addNewCount(count: number) {
//     this.count += 1;
// }


// const carWithoutBrandName = new Car('noname');

// console.log(carWithoutBrandName);

// carWithoutBrandName.addNewCount();
// carWithoutBrandName.addNewCount();
// carWithoutBrandName.addNewCount();

// console.log(carWithoutBrandName);


class Car {
    name: string;
    count: number;

    constructor(name: string) {
        this.name = name;
        this.count = 0;
    }

    addNewCount() {
        return this.count += 1;
    }
}

const carWithoutBrandName = new Car('noname');

console.log(carWithoutBrandName);

carWithoutBrandName.addNewCount();
carWithoutBrandName.addNewCount();
carWithoutBrandName.addNewCount();

console.log(carWithoutBrandName);