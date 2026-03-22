// Print natural numbers up to n

let n = Number(prompt("Enter a number:"));

function printNaturalNumbers(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

printNaturalNumbers(n);