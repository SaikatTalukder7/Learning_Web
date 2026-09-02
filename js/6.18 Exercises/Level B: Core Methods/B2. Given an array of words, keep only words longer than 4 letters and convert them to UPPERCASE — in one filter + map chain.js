// B2. Given an array of words, keep only words longer than 4 letters and convert them to UPPERCASE — in one filter + map chain.  

const words = ["apple", "cat", "banana", "dog", "orange"];

// Keep words longer than 4 letters
// Then convert them to UPPERCASE
const result = words
    .filter((word) => word.length > 4)
    .map((word) => word.toUpperCase());

console.log(result);
