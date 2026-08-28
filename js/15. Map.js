const prices = [100, 250, 40];
const withVat = prices.map((price) => Math.round(price * 1.15));
console.log(withVat);
console.log(prices);


const apiUsers = [
    { id: 1, first: "Nusrat", last: "Jahan", cgpa: 3.8 },
    { id: 2, first: "Rafi", last: "Ahmed", cgpa: 3.2 },
];

const names = apiUsers.map((u) => `${u.first} ${u.last}`);

console.log(names);

const cards = apiUsers.map((u) => ({
    name: u.first,
    cgpa: u.cgpa
}));

console.log(cards);
