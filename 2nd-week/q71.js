// Given a sorted array of distinct elements, find the summation of absolute differences of all pairs in the given array. (Ex: arr[] = {1, 2, 3, 4}, Output: 10)

function sumAbsolute(arr) {
  let sum = 0;
  let prefix = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i] * i - prefix;
    prefix += arr[i];
  }

  return sum;
}

console.log(sumAbsolute([1, 2, 3, 4]));