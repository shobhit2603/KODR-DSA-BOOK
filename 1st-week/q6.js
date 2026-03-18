// Accept two numbers from user and swap their values(Part 2 - Swap without using third variable)

let a = prompt("Enter the first number:");
let b = prompt("Enter the second number:");

a = a + b;
b = a - b;
a = a - b;

// [a, b] = [b, a];

alert(`After swap: a = ${a}, b = ${b}`);