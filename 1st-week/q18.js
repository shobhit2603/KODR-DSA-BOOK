// Accept three numbers and find the greatest number among them.

let a = prompt("Enter first number: ");
let b = prompt("Enter second number: ");
let c = prompt("Enter third number: ");

if (a > b && a > c) {
    alert(`${a} is the greatest number.`);
} else if (b > a && b > c) {
    alert(`${b} is the greatest number.`);
} else {
    alert(`${c} is the greatest number.`);
}