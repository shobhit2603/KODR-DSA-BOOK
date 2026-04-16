// Sort Even and Odd Indices Independently

function sortEvenOdd(nums) {

    let n = nums.length;

    let even = [];
    let odd = [];

    for (let i = 0; i < n; i++) {

        if (i % 2 === 0) {
            even.push(nums[i]);
        } else {
            odd.push(nums[i]);
        }
    }

    for (let i = 0; i < even.length - 1; i++) {
        for (let j = 0; j < even.length - 1 - i; j++) {

            if (even[j] > even[j + 1]) {
                let temp = even[j];
                even[j] = even[j + 1];
                even[j + 1] = temp;
            }
        }
    }

    for (let i = 0; i < odd.length - 1; i++) {
        for (let j = 0; j < odd.length - 1 - i; j++) {

            if (odd[j] < odd[j + 1]) {
                let temp = odd[j];
                odd[j] = odd[j + 1];
                odd[j + 1] = temp;
            }
        }
    }

    let e = 0, o = 0;

    for (let i = 0; i < n; i++) {

        if (i % 2 === 0) {
            nums[i] = even[e++];
        } else {
            nums[i] = odd[o++];
        }
    }

    return nums;
}

console.log(sortEvenOdd([4,1,2,3]));