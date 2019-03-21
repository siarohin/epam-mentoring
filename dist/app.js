function reverse(stringOrArray) {
    if (typeof stringOrArray === 'string') {
        return stringOrArray
            .split('')
            .reverse()
            .join('');
    }
    return stringOrArray
        .slice()
        .reverse();
}
console.log(reverse('peppe'));
console.log(reverse(['peppe', 'somethingElse']));
