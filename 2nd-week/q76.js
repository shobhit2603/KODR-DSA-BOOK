// Sort First half in Ascending and Second half in descending order in an array

function sortArray(arr) {
  let mid = Math.floor(arr.length / 2);

  // First half ascending
  for (let i = 0; i < mid; i++) {
    for (let j = 0; j < mid - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  // Second half descending
  for (let i = mid; i < arr.length; i++) {
    for (let j = mid; j < arr.length - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

console.log(sortArray([5, 2, 8, 7, 1, 6]));