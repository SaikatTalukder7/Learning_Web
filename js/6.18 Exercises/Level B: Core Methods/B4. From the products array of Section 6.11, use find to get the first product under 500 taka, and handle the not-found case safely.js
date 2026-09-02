// B4. From the products array of Section 6.11, use find to get the first product under 500 taka, and handle the not-found case safely


const products = [
    { name: "Laptop", price: 80000 },
    { name: "Mouse", price: 400 },
    { name: "Keyboard", price: 700 }
];
// Find the first product under 500 taka
const product = products.find((p) => p.price < 500);

// Safely handle if no product is found
if (product) {
    console.log(product);
} else {
    console.log("No product found");
}
