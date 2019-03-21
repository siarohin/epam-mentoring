enum Sizes {
    Small,
    Medium,
    Large,
}

enum Sizes {
    ExtraLarge = 3,
}

console.log(Sizes[Sizes.ExtraLarge]);
console.log(Sizes[Sizes.ExtraLarge] === Sizes[3]);
console.log(Sizes.ExtraLarge);