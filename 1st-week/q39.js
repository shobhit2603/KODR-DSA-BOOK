// Automorphic number (Ex: 5 = 25 = 625 = 390625, 6=36, 76 = 5776)

function isAutomorphic(n) {
    let square = n * n;

    while (n > 0) {
        if (n % 10 !== square % 10) {
            return "Not Automorphic";
        }

        n = Math.floor(n / 10);
        square = Math.floor(square / 10);
    }

    return "Automorphic";
}

console.log(isAutomorphic(5));   // Automorphic
console.log(isAutomorphic(6));   // Automorphic
console.log(isAutomorphic(76));  // Automorphic
console.log(isAutomorphic(25));  // Automorphic
console.log(isAutomorphic(7));   // Not Automorphic