enum Sizes {
    Small = 'small',
    Medium = 'medium',
    Large = 500,
}

let selected: Sizes = Sizes.Small;

const updateSize = (size: Sizes): void => {
    selected = size;
}

updateSize(Sizes.Large);

console.log(Sizes);