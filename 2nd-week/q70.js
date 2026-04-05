// Build Array from Permutation

function buildArray(nums) {
  let n = nums.length;
  let ans = new Array(n);

  for (let i = 0; i < n; i++) {
    ans[i] = nums[nums[i]];
  }

  return ans;
}

let nums = [0, 2, 1, 5, 3, 4];

console.log(buildArray(nums));