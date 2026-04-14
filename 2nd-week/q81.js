// Keep Multiplying Found Values by Two

function findFinalValue(nums, original) {
    let found = true;

    while (found) {
        found = false;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === original) {
                original *= 2;
                found = true;
                break;
            }
        }
    }
    return original;
}

let nums = [5, 3, 6, 1, 12], original = 3;
console.log(findFinalValue(nums, original)); // Output: 24

nums = [2, 7, 9], original = 4;
console.log(findFinalValue(nums, original)); // Output: 4