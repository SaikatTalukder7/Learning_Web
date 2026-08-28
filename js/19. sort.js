const nums = [30, 4, 200, 11];

nums.sort();                         // converts to string → lexicographic order
console.log(nums);                   // [11, 200, 30, 4]

nums.sort((a, b) => a - b);          // ascending → small to large
console.log(nums);                   // [4, 11, 30, 200]

nums.sort((a, b) => b - a);          // descending → large to small
console.log(nums);                   // [200, 30, 11, 4]



// Example
const products = [
    { name: "Bag", price: 1200 },
    { name: "Pen", price: 15 },
    { name: "Book", price: 450 },
];
products.sort((a, b) => a.price - b.price);
console.log(products);

products.sort((a, b) => a.name.localeCompare(b.name));
console.log(products);
