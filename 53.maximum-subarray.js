/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (nums.length == 1) return nums[0];
  let maxSum = (currentSum = nums[0]);
  for (let i = 1; i < nums.length; i++) {
    if (currentSum < 0) {
      currentSum = nums[i];
    } else {
      currentSum += nums[i];
    }
    if (maxSum <= currentSum) maxSum = currentSum;
  }
  return maxSum;
};
// @lc code=end