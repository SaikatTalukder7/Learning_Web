//1. 
const original = [1, 2, 3];

const alias = original;   // same array reference
alias.push(4);             // adds 4 to the same array
console.log(original);     // [1, 2, 3, 4]



//2.
const original = [1, 2, 3];
const copy = [...original];   // new array copy
copy.push(99);                // adds 99 only to copy

console.log(original);        // [1, 2, 3]
console.log(copy);            // [1, 2, 3, 99]



//3. 
const teams = [
    { name: "Falcons", pts: 10 }
];
const shallow = [...teams];     // new array, but object is same reference
console.log(teams[0].pts);      // 10

shallow[0].pts = 99;            // changes the same object
console.log(teams[0].pts);      // 99

const deep = structuredClone(teams);  // completely new copy
deep[0].pts = 10;                     // changes only deep
console.log(teams[0].pts);            // 99
