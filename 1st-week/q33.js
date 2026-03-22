// Write a program to take two inputs a, b & find the value of a raised to the power of b. (Ex - a = 2, b = 5, OP - 2^5 = 32)

let a = 2;
let b = 5;

let result = 1;
for (let i = 1; i <= b; i++) {
    result *= a;
}

console.log(result);