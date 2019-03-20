let priceOrderId: number = 100;
priceOrderId = 200;

const countOfGoods = 1001;

const summOfAll = (priceOrderId: number, c: number) => {
    return priceOrderId * countOfGoods;
}

console.log(summOfAll(priceOrderId, priceOrderId));