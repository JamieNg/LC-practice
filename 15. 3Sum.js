/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length === 3)
    return nums.reduce((sum, num) => sum + num, 0) === 0 ? [nums] : [];
  const results = [];
  nums.sort((a, b) => a - b);
  const added = [];
  for (let i = 0; i < nums.length; i++) {
    if (added.includes(nums[i])) continue;
    else added.push(nums[i]);
    for (let l = i + 1, r = nums.length - 1; l < r; ) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum === 0) {
        results.push([nums[i], nums[l], nums[r]]);
        while (nums[l] === nums[l + 1]) l++;
        while (nums[r] === nums[r - 1]) r--;
        l++;
      } else if (sum > 0) {
        r--;
      } else {
        l++;
      }
    }
  }
  return results;
};

threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]);
//[[-4,0,4],[-4,1,3],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]]
