//1.
const grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(grid[1][2]);  // row 1, column 2 → 6
let total = 0;

for (const row of grid) {       // each row
    for (const cell of row) {   // each value
        total += cell;          // add to total
    }
}
console.log(total);             // 45



//2.
const nested = [1, [2, 3], [4, [5]]];
console.log(nested.flat());            // one level flatten
console.log(nested.flat(Infinity));    // all levels flatten
//4.
const sentences = ["I love JS", "Arrays rock"];

const words = sentences.flatMap((s) => s.split(" ")); // split each sentence into words + flatten
console.log(words); // ["I", "love", "JS", "Arrays", "rock"]



//5. 
