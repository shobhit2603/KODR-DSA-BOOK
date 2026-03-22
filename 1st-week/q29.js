// Print the sum of all even & odd numbers in a range separately.

let start = 1;
let end = 10;
let sumEven = 0;
let sumOdd = 0;

for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
        sumEven += i;
    } else {
        sumOdd += i;
    }
}

console.log(`Sum of even numbers from ${start} to ${end}: ${sumEven}`);
console.log(`Sum of odd numbers from ${start} to ${end}: ${sumOdd}`);