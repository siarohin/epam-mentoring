interface People {
    nation: string;
    middleAge: number;
    sex: string[];
    getNationMiddleAge(): string[];
}

let belarussian: People;

const createNation = (nation: string, middleAge: number, sex: string[]): People => {
    return {
        nation,
        middleAge,
        sex,
        getNationMiddleAge() {
            return this.nation;
        }
    };
};

const blr = createNation('blr', 65, ['male', 'female']);
console.log(blr);
console.log(blr.getNationMiddleAge());
