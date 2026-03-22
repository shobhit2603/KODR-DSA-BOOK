// Accept a number and check if it is a palindromic number (If number and its reverse are equal, Ex: 12321 - Reverse - 12321)

let num = Number(prompt("Enter a number: "));

let originalNum = num;
let reversedNum = 0;

while (num > 0) {
    let digit = num % 10;
    reversedNum = reversedNum * 10 + digit;
    num = Math.floor(num / 10);
}

if (originalNum === reversedNum) {
    console.log(`${originalNum} is a palindromic number.`);
} else {
    console.log(`${originalNum} is not a palindromic number.`);
}