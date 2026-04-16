// Minimum Sum of Four Digit Number After Splitting Digits

function minSum(num) {
    let digits = [];

    for (let i = 0; i < 4; i++) {
        digits.push(num % 10);
        num = Math.floor(num / 10);
    }

    digits.sort((a, b) => a - b);

    return digits[0] * 10 + digits[2] + digits[1] * 10 + digits[3];
}

console.log(minSum(2932));