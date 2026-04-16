// Make Array Zero by Subtracting Equal Amounts

function minimumOperations(nums) {

    let map = {};
    let count = 0;

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] > 0 && map[nums[i]] === undefined) {
            map[nums[i]] = true;
            count++;
        }
    }

    return count;
}

console.log(minimumOperations([1, 5, 0, 3, 5]));