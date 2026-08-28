const queue = ["Rahim", "Karim"];

queue.push("Salma");

const served = queue.shift();

console.log(served);
console.log(queue);

const gaveUp = queue.pop();

console.log(gaveUp);

queue.unshift("VIP");

console.log(queue);
