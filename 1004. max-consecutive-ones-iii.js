var longestOnes = function (nums, k) {
  let max = 0;
  while (max < nums.length && (nums[max] === 1 || k > 0)) {
    if (nums[max] === 0) k--;
    max++;
  }
  max
  for (let l = 0, r = max; r < nums.length; r++) {
    if (nums[r] === 0) {
      while (nums[l] === 1) l++;
      l++;
    }  
    max = Math.max(r - l + 1, max);
  }
  return max;
};

//expected: 6
console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));

//expecetd: 10
console.log(
  longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)
);
