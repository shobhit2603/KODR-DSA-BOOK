// Linear Search an array - If element found print the index, else -1

function linearSearch(arr, key) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      return i;
    }
  }
  return -1;
}

let arr = [10, 20, 30, 40, 50];
console.log(linearSearch(arr, 60));
