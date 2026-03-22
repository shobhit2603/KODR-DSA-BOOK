// Sum up to n terms.

let n = Number(prompt("Enter a number to find the sum up to n terms: "));

function sumUpToN(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumUpToN(n));