const numbers = [4, 2, 5, 20, 1, 8, 7];
const target = 10;

console.log(numbers);
console.log(target);

console.log(numbers.slice(1));
console.log(target - numbers[0]);


console.log(numbers.sort((a, b) => a - b));
console.log(target)

console.log(numbers.sort((a, b) => a - b).slice(1));
console.log(target - numbers[0]);