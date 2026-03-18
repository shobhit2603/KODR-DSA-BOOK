// Accept the parameters and calculate the Compound Interest & print it on STDOUT(Use Math class methods)

let p = prompt("Enter the principal amount:");
let r = prompt("Enter the rate of interest:");
let t = prompt("Enter the time in years:");

let ci = p * Math.pow((1 + r /100), t) - p;

console.log("Compound Interest: " + ci.toFixed(2));
console.log("Total Amount: " + (p + ci).toFixed(2));