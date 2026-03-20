const units = prompt("Enter the number of units:");

let billAmount = 0;

if (units <= 100) {
    billAmount = units * 1;
} else if (units <= 200) {
    billAmount = (100 * 1) + ((units - 100) * 2);
} else if (units <= 300) {
    billAmount = (100 * 1) + (100 * 2) + ((units - 200) * 3);
} else {
    billAmount = (100 * 1) + (100 * 2) + (100 * 3) + ((units - 300) * 4);
}

console.log(`Total Bill = ₹${billAmount}`);