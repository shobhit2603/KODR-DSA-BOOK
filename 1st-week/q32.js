// Check if the number is Prime or not.

let num = Number(prompt("Enter a number: "));

function isPrime(num) { 
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

if (isPrime(num)) {
    console.log(`${num} is a prime number.`);
} else {
    console.log(`${num} is not a prime number.`);
}