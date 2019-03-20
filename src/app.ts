let coupon: number | null = 25;

const removeCoupon = ():void => {
    coupon = null;
};

console.log(coupon);

removeCoupon();

console.log(coupon);