const a = ["Jan", "Feb", "BAD", "Mar"];

const removed = a.splice(2, 1);

console.log(a);
console.log(removed);

a.splice(1, 0, "NEW");

console.log(a);

a.splice(1, 1, "X", "Y");

console.log(a);
