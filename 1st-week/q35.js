// Sum of digits of a number(Ex: 936 = 18)

let num = 936;

let sumOfDigits = 0;

while (num > 0) {
    let digit = num % 10;
    sumOfDigits += digit;
    num = Math.floor(num / 10);
}

console.log(sumOfDigits);