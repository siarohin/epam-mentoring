interface StaticData {
    getNationMiddleAge(): string[];
}

interface People extends StaticData {
    nation: string;
    middleAge: number;
    maxAge?: number;
    sex: string[];
    [key: number]: string;
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

blr.maxAge = 100;
blr[10] = 'Has pasport';

console.log(blr);