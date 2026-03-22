// Reverse for loop. Print n to 1.

let n = Number(prompt("Enter a number to print from n to 1: "));

function printReverse(n) {
    for (let i = n; i > 0; i--) {
        console.log(i);
    }
}

printReverse(n);