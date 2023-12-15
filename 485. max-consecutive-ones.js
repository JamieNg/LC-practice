var findMaxConsecutiveOnes = function (nums) {
  let max = 0;
  for (let length = (i = 0); i < nums.length; i++) {
    if (nums[i] === 1) {
      length++;
    }
    if (nums[i] === 0 || i === nums.length - 1) {
      max = Math.max(length, max);
      length = 0;
    }
  }
  return max;
};

//expected : 3
console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));

//expected: 2
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]));

//expected: 1
console.log(findMaxConsecutiveOnes([1]));
