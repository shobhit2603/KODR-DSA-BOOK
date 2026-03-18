// Accept the three sides of triangle and calculate the area using Heron's formula

let a = prompt("Enter the length of side a:");
let b = prompt("Enter the length of side b:");
let c = prompt("Enter the length of side c:");

let s = (a + b + c) / 2;
let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

alert(`Area of the triangle: ${area.toFixed(2)}`);