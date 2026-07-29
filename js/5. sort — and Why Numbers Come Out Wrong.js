const nums = [30, 4, 200, 11];
nums.sort(); // [11, 200, 30, 4] — WRONG (string sort) 
console.log(nums) // wrong sort cameo out because it doeas not see as number directly
nums.sort((a, b) => a - b); // [4, 11, 30, 200] — correct
console.log(nums)


const products = [
{ name: "Bag", price: 1200 },
{ name: "Pen", price: 15 },
{ name: "Book", price: 450 },
];
products.sort((a ,b) => a.price - b.price); // by number
console.log(products)

products.sort((a, b) => a.name.localeCompare(b.name)); // by name
console.log(products)
