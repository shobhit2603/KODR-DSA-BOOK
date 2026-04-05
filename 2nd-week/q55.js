// Find the greatest element(Ex: { 2, 96, 69, 77, 145, 20} = Max element = 145 found at 4 index)

let arr = [2, 96, 69, 77, 145, 20];

let max = arr[0];
let min = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
    if (arr[i] < min) {
        min = arr[i];
    }
}

console.log("Maximum:", max, "at index", arr.indexOf(max));
console.log("Minimum:", min, "at index", arr.indexOf(min));