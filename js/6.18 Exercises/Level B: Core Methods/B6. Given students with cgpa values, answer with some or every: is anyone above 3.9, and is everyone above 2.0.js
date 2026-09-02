//B6. Given students with cgpa values, answer with some/every: is anyone above 3.9, and is everyone above 2.0?



const students = [
    { name: "Asha", cgpa: 3.95 },
    { name: "Rafi", cgpa: 3.50 },
    { name: "Nila", cgpa: 2.80 }
];
// Is anyone above 3.9?
const above39 = students.some((student) => student.cgpa > 3.9);

// Is everyone above 2.0?
const above20 = students.every((student) => student.cgpa > 2.0);

console.log(above39); // true
console.log(above20); // true
