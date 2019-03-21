var Coupon = /** @class */ (function () {
    function Coupon() {
    }
    Coupon.create = function (percent) {
        return percent;
    };
    Coupon.allowed = ['pepperoni', 'blazing inferno'];
    return Coupon;
}());
new Coupon();
console.log(Coupon.create(100));
