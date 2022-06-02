/*
 * @lc app=leetcode id=904 lang=javascript
 *
 * [904] Fruit Into Baskets
 */

// @lc code=start
/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  let type1 = -1,
    type2 = -1;
  let maxLength = 0;
  for (let i = 0, head = 0; i < fruits.length; i++) {
    if (type1 == -1) {
      type1 = fruits[i];
    } else if (type2 == -1 && fruits[i] != type1) {
      type2 = fruits[i];
    } else if (type1 != fruits[i] && type2 != fruits[i]) {
      let backIndex = i - 1;
      while (backIndex >= head && fruits[backIndex] == fruits[i - 1]) {
        backIndex--;
      }
      head = backIndex + 1;
      if (fruits[head] == type1) type2 = fruits[i];
      else type1 = fruits[i];
    }
    let currLength = i - head + 1;
    if (currLength > maxLength) maxLength = currLength;
  }
  return maxLength;
};
// @lc code=end

console.log("Testing [1,2,3,2,2]");
console.log("Extected to be 4");
console.log(totalFruit([1, 2, 3, 2, 2]));
console.log("Testing [1,0,0,1,4,1,4,1,1,0,3]");
console.log("Expected to be 6");
console.log(totalFruit([1, 0, 0, 1, 4, 1, 1, 4, 1, 0, 3]));
console.log("Testing [0,0,1,1]");
console.log("Expected to be 4");
console.log(totalFruit([0, 0, 1, 1]));
console.log("Testing [0,1,6,6,4,4,6]");
console.log("Expected to be 5");
console.log(totalFruit([0, 1, 6, 6, 4, 4, 6]));
