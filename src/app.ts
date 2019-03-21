class Coupon {
    static allowed = ['pepperoni', 'blazing inferno'];
    static create(percent: number) {
        return percent;
    }
}

new Coupon();

console.log(Coupon.create(100));