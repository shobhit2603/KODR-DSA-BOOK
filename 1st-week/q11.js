// Find circumference and area of circle

const r = 10;

function calculateCircle(radius) {
    const circumference = 2 * Math.PI * radius;
    const area = Math.PI * Math.pow(radius, 2);
    return { circumference, area };
}

const { circumference, area } = calculateCircle(r);

console.log(`Circumference = ${circumference}`);
console.log(`Area = ${area}`);