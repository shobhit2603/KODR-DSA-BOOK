// Print all the factors of a number

let num = Number(prompt("Give a number: "))

for (let i = 1; i <= num; i++) {
    if (num % i === 0) console.log(i, "is factor of", num);
}