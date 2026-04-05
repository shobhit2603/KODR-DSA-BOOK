// Given an array of even size, task is to find minimum value that can be added to an element so that the array becomes balanced. An array is balanced if the sum of the left half of the array elements is equal to the sum of the right half. (Ex: Input : 1 2 1 2 1 3, Output : 2)

// Approach (DSA Logic)
// Find middle index
// Calculate left sum
// Calculate right sum
// Find absolute difference
// That difference is answer

function minValueToBalance(arr) {
  let n = arr.length;
  let mid = n / 2;

  let leftSum = 0;
  let rightSum = 0;

  // Left half sum
  for (let i = 0; i < mid; i++) {
    leftSum += arr[i];
  }

  // Right half sum
  for (let i = mid; i < n; i++) {
    rightSum += arr[i];
  }

  let diff;

  if (leftSum > rightSum) {
    diff = leftSum - rightSum;
  } else {
    diff = rightSum - leftSum;
  }

  return diff;
}

let arr = [1, 2, 1, 2, 1, 3];

console.log(minValueToBalance(arr));