// B3. Use reduce to compute the product of [2, 3, 4] (answer: 24), and write the accumulator trace table by hand.

const nums = [2, 3, 4];
const product = nums.reduce((total, n) => total * n, 1);
console.log(product);  // 24



// OR
const nums = [2, 3, 4];
const product = nums.reduce(
    (total, n) => total * n,  // multiply accumulator by current number
    1                          // initial value
);
console.log(product);          // 24
