// Find sum of minimum absolute difference of the given array

function sumMinAbsoluteDiff(arr) {
  let n = arr.length;

  // Bubble Sort - Array
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  // Find sum of absolute differences
  let sum = 0;

  for (let i = 0; i < n - 1; i++) {
    let diff = arr[i + 1] - arr[i];

    if (diff < 0) {
      diff = -diff;
    }

    sum += diff;
  }

  return sum;
}

let arr = [3, 8, 15, 17];

console.log(sumMinAbsoluteDiff(arr));