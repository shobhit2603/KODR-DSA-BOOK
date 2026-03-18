// Accept two integers from user and print the sum(Ex - The sum of 45 & 12 = 57)

let a = prompt("Enter the first number:");
let b = prompt("Enter the second number:");

function add(a, b) {
    const sum = a + b;
    alert(`The sum of ${a} & ${b} = ${sum}`);
}

add(a, b);