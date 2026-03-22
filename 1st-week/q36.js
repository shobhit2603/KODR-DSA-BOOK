// Accept a number and print its reverse using loops

let num = Number(prompt("Enter a number: "));

let reversedNum = 0;

while (num > 0) {
    let digit = num % 10;
    reversedNum = reversedNum * 10 + digit;
    num = Math.floor(num / 10);
}

console.log(`Reversed number: ${reversedNum}`);