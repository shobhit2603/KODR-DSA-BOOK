// Accept two numbers and print the greatest between them

let a = prompt("Enter first number:");
let b = prompt("Enter second number:");

if (a > b) {
    alert(`${a} is greater than ${b}`);
} else if (b > a) {
    alert(`${b} is greater than ${a}`);
} else {
    alert("Both numbers are equal");
}