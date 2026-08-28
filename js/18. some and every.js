const users = [
    { name: "Sadia", role: "admin" },
    { name: "Tanvir", role: "user" },
];
console.log(users.some((u) => u.role === "admin"));   // at least one admin?
console.log(users.every((u) => u.role === "admin"));  // everyone admin?

console.log(users.some((u) => u.role === "user"));    // at least one user?
console.log(users.every((u) => u.role === "user"));   // everyone use?
