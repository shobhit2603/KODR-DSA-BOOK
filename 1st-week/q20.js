// Shop Discount

let amount = prompt("Enter the price:");

let discount = 0;

if (amount >= 1000) { 
    discount = 20;
} else if (amount >= 500) {
    discount = 10;
} else if (amount >= 200) {
    discount = 5;
} else {
    discount = 0;
}

let discountAmount = (amount * discount) / 100;
let finalAmount = amount - discountAmount;

console.log(`Original Price: $${amount}`);
console.log(`Discount: ${discount}%`);
console.log(`Discount Amount: $${discountAmount}`);
console.log(`Final Price: $${finalAmount}`);

