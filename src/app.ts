let priceOrderId: number = 100;
priceOrderId = 900;

const countOfGoods = 1001;

const summOfAll = (priceOrderId: number, countOfGoods: number) => {
    return priceOrderId * countOfGoods;
}

console.log(summOfAll(priceOrderId, countOfGoods));