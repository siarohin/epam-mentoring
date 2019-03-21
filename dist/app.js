var belarussian;
var createNation = function (nation, middleAge, sex) {
    return {
        nation: nation,
        middleAge: middleAge,
        sex: sex,
        getNationMiddleAge: function () {
            return this.nation;
        }
    };
};
var blr = createNation('blr', 65, ['male', 'female']);
console.log(blr);
console.log(blr.getNationMiddleAge());
blr.maxAge = 100;
