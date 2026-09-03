//C3. Demonstrate the shallow-copy trap with an array of objects, then fix it with structuredClone, printing evidence at each step.



const original = [
    { name: "Apple", price: 100 },
    { name: "Banana", price: 50 }
];

// Shallow copy: new array, but objects are still shared
const shallow = [...original];

console.log("Before change:");
console.log(original);
console.log(shallow);

// Change price through shallow copy
shallow[0].price = 200;  // original-এর object-ও change হবে

console.log("After shallow copy change:");
console.log("Original:", original);
console.log("Shallow:", shallow);

// Deep copy: objects are also copied separately
const deep = structuredClone(original);

deep[0].price = 300;  // only deep copy changes

console.log("After structuredClone change:");
console.log("Original:", original);
console.log("Deep:", deep); 
