// Print the count of subarrays whose sum is equal to the target. (Ex - {1,2,3,7,5}, T = 12 O/P - 2 - [ {2,3,7}, {7,5} ] - Both subarrays have sum 12)

function countSubarrays(arr, target) {
  let count = 0;
  let sum = 0;
  let left = 0;

  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];

    while (sum > target && left <= right) {
      sum -= arr[left];
      left++;
    }

    if (sum === target) {
      count++;
    }
  }

  return count;
}

let arr = [1, 2, 3, 7, 5];
let target = 12;

console.log(countSubarrays(arr, target));