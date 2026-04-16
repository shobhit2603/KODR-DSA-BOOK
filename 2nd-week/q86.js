// Find Greatest Common Divisor of Array

function findGCD(arr) {

    let result = arr[0];

    for (let i = 1; i < arr.length; i++) {
        result = gcd(result, arr[i]);
    }

    return result;
}


let arr = [2, 4, 6, 8];

console.log(findGCD(arr));