const ids = [101, 205, 33];

console.log(ids.includes(205));
console.log(ids.indexOf(205));
console.log(ids.indexOf(999));



const users = [
    { id: 7, name: "Sadia" },
    { id: 9, name: "Tanvir" },
];

console.log(users.indexOf({ id: 9 }));

const found = users.find((u) => u.id === 9);

console.log(found.name);
console.log(users.findIndex((u) => u.id === 9));
