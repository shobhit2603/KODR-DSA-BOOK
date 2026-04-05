// Take n integer inputs from user and store them in an array. Now, copy all the elements into another array in reverse order and print it.

let n = parseInt(prompt("Enter number of elements:"));

let arr = [];

for (let i = 0; i < n; i++) {
    arr[i] = parseInt(prompt("Enter element " + (i + 1)));
}

let reverseArr = [];

let j = 0;

for (let i = n - 1; i >= 0; i--) {
    reverseArr[j] = arr[i];
    j++;
}

console.log("Reversed Array:");

for (let i = 0; i < n; i++) {
    console.log(reverseArr[i]);
}