const numbers = [7, 1, 20, 9, 2, 3, 33, 9000, 10, 1];

numbers.sort((a, b) => a - b);

console.log(numbers.sort((a, b) => a - b));

const numSet = new Set(numbers);

console.log(numSet);
