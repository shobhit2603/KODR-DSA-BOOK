// Factorial of a number

let n = prompt("Enter a number to find its factorial: ");

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}

let result = factorial(n);
console.log(`The factorial of ${n} is ${result}.`);