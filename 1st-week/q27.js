// Sum up to n terms.

let n = 10;

function sumUpToN(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumUpToN(n));