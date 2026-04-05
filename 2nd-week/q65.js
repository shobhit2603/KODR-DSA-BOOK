// Move all the negative elements on the left side and positive elements on the right side O(n).

function moveNegatives(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    if (arr[left] < 0) {
      left++;
    } else if (arr[right] > 0) {
      right--;
    } else {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;

      left++;
      right--;
    }
  }

  return arr;
}

let arr = [1, -2, 3, -4, -1, 6];

console.log(moveNegatives(arr));