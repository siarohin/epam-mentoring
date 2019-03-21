var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
        this.count = 0;
    }
    Car.prototype.addNewCount = function () {
        return this.count += 1;
    };
    return Car;
}());
var carWithoutBrandName = new Car('noname');
console.log(carWithoutBrandName);
carWithoutBrandName.addNewCount();
carWithoutBrandName.addNewCount();
carWithoutBrandName.addNewCount();
console.log(carWithoutBrandName);
carWithoutBrandName.name = 'Car with brandName';
console.log(carWithoutBrandName);
