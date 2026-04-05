// Array left rotation by K elements

function reverse(arr, start, end) {
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

function leftRotate(arr, n, k) {
    k = k % n;
    reverse(arr, 0, k - 1);
    reverse(arr, k, n - 1);
    reverse(arr, 0, n - 1);

    return arr;
}

let arr = [1, 2, 3, 4, 5];
let k = 2;

console.log(leftRotate(arr, arr.length, k));