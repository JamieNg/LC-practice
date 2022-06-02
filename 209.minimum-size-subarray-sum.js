/*
 * @lc app=leetcode id=209 lang=javascript
 *
 * [209] Minimum Size Subarray Sum
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  if (nums[0] >= target) return 1;
  if (nums.length == 1) return nums[0] < target ? 0 : 1;
  let minLength = 0;
  let currSum = nums[0],
    head = 0,
    tail = 1;
  for (; tail < nums.length; tail++) {
    if (nums[tail] >= target) return 1;
    currSum += nums[tail];
    while (currSum - nums[head] >= target) {
      currSum -= nums[head];
      head++;
    }
    if (currSum >= target) {
      const newLength = tail - head + 1;
      if (minLength == 0 || newLength < minLength) minLength = newLength;
    }
  }
  return minLength;
};
// @lc code=end
minSubArrayLen(7, [2, 3, 1, 2, 4, 3]);
