// Accept a number and check if it is a strong number or not (Sum of factorial of each digit, Ex: 145 = 1! + 4! + 5! = 145)

let num = Number(prompt("Enter a number: "));

let originalNum = num;
let sum = 0;

while (num > 0) {
    let digit = num % 10;
    let factorial = 1;
    for (let i = 2; i <= digit; i++) {
        factorial *= i;
    }
    sum += factorial;
    num = Math.floor(num / 10);
}

if (originalNum === sum) {
    console.log(`${originalNum} is a strong number.`);
} else {
    console.log(`${originalNum} is not a strong number.`);
}