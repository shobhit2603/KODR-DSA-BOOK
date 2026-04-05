// Divide Array Into Equal Pairs

function canDivide(arr) {
  let map = {};

  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = (map[arr[i]] || 0) + 1;
  }

  for (let key in map) {
    if (map[key] % 2 !== 0) return false;
  }

  return true;
}

console.log(canDivide([3, 2, 3, 2, 2, 2]));