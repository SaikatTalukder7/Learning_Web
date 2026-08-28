const scores = [35, 80, 55, 92, 20];
const passed = scores.filter((s) => s >= 40);

console.log(passed);
console.log(passed.length);
console.log(scores);



const products = [
    { name: "Pen", price: 15, inStock: true },
    { name: "Book", price: 450, inStock: false },
    { name: "Bag", price: 1200, inStock: true },
];
const available = products.filter((p) => p.inStock);
const cheapAndReady = products.filter(
    (p) => p.price < 500 && p.inStock
);
console.log(cheapAndReady);



const todos = [{ id: 1 }, { id: 2 }, { id: 3 }];
const remaining = todos.filter((t) => t.id !== 2);
console.log(remaining);
