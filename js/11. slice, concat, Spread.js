const days = ["Sun", "Mon", "Tue", "Wed", "Thu"];

console.log(days.slice(1, 3));
console.log(days.slice(-2));
console.log(days);

const g1 = [1, 2];
const g2 = [3, 4];

const both = [...g1, ...g2];
const withExtra = [0, ...g1, 99];

console.log(both);
console.log(withExtra);
