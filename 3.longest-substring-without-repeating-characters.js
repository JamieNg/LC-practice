/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) return s.length;
  let maxLength = 1;
  let subS = s[0];
  for (let i = 1; i < s.length; i++) {
    if (subS.includes(s[i])) {
      let index = subS.indexOf(s[i]);
      subS = subS.substring(index+1) + s[i];
    } else {
      subS += s[i];
    }
    if (subS.length > maxLength) {
      maxLength = subS.length;
    }
  }
  return maxLength;
};
// @lc code=end
