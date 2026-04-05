// Maximum Number of Pairs in Array

function maxPairs(arr) {
  // Bubble Sort
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  let pairs = 0;
  let left = 0;

  for (let i = 0; i < arr.length; ) {
    if (arr[i] === arr[i + 1]) {
      pairs++;
      i += 2;
    } else {
      left++;
      i++;
    }
  }

  return [pairs, left];
}

console.log(maxPairs([1, 3, 2, 1, 3, 2, 2]));