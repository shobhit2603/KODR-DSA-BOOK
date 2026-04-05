// Concatenation of array

function concatenateArray(arr) {
  let n = arr.length;
  let result = new Array(2 * n);

  for (let i = 0; i < n; i++) {
    result[i] = arr[i];
    result[i + n] = arr[i];
  }

  return result;
}

let arr = [1, 2, 3];

console.log(concatenateArray(arr));