var Sizes;
(function (Sizes) {
    Sizes[Sizes["Small"] = 0] = "Small";
    Sizes[Sizes["Medium"] = 1] = "Medium";
    Sizes[Sizes["Large"] = 2] = "Large";
})(Sizes || (Sizes = {}));
(function (Sizes) {
    Sizes[Sizes["ExtraLarge"] = 3] = "ExtraLarge";
})(Sizes || (Sizes = {}));
console.log(Sizes[Sizes.ExtraLarge]);
console.log(Sizes[Sizes.ExtraLarge] === Sizes[3]);
console.log(Sizes.ExtraLarge);
