// Accept size n from user and create an n size array then take n inputs into it and finally print the sum & average of all elements.

let n = 5;
let arr = [1, 2, 3, 4, 5];

let sum = 0;
for (let i = 0; i < n; i++) {
    sum += arr[i];
}

let avg = sum / n;

console.log("Sum:", sum);
console.log("Average:", avg);