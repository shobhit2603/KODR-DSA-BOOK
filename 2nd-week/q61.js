// Array Reverse Without Using Extra space

function reverse(arr, start, end) {
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

function reverseArray(arr, n) {
    reverse(arr, 0, n - 1);
    return arr;
}

let arr = [1, 2, 3, 4, 5];
console.log(reverseArray(arr, arr.length));