const prices = [100, 250, 40];
const withVat = prices.map((price) => Math.round(price * 1.15)); // use Math.round() for not getting any floating number
console.log(withVat); // make another array type which is map [115, 287.5, 46]
console.log(prices); // [100, 250, 40] — untouched
