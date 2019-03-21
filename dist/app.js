var Sizes;
(function (Sizes) {
    Sizes["Small"] = "small";
    Sizes["Medium"] = "medium";
    Sizes[Sizes["Large"] = 500] = "Large";
})(Sizes || (Sizes = {}));
var selected = Sizes.Small;
var updateSize = function (size) {
    selected = size;
};
updateSize(Sizes.Large);
console.log(Sizes);
