// Find surface area of sphere

let r = 10;

function calculateAreaOfSphere(radius) {
    let surfaceArea = 4 * Math.PI * Math.pow(radius, 2);
    return surfaceArea;
}

let surfaceArea = calculateAreaOfSphere(r);


console.log("Surface area of the sphere is: " + surfaceArea.toFixed(2));

