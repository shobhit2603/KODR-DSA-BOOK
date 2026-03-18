// Accept the length and width of a rectangle.Calculate & print the area and perimeter.

let length = prompt("Enter the length:");
let width = prompt("Enter the width:");

let area = length * width;
let perimeter = 2 * (length + width);

alert(`Area: ${area}`);
alert(`Perimeter: ${perimeter}`);