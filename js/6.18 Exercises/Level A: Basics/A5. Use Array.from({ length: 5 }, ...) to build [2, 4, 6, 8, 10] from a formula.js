const numbers = Array.from({ length: 5 });

for (let i = 0; i < numbers.length; i++) {
    numbers[i] = (i + 1) * 2;
}

console.log(numbers);
