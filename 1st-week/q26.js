// Take a number as input and print its table (Ex: 5 * 1 = 5 ... up to 10 terms)

let n = prompt("Enter a number to print its Table: ");

for (let i = 1; i <= 10; i++) {
    console.log(`${n} * ${i} = ${n * i}`);

}