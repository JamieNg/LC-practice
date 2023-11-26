var sortColors = function (nums) {
  for (let l = 0, r = nums.length - 1, i = 0; i <= r; ) {
    if (nums[i] == 0) {
      nums[i] = nums[l];
      nums[l] = 0;
      l++;
    } else if (nums[i] == 2) {
      nums[i] = nums[r];
      nums[r] = 2;
      r--;
    }
    if (nums[i] == 1 || i<l) i++;
  }
  return nums;
};

//expected [0,0,1,1,2,2]
console.log(sortColors([2, 0, 2, 1, 1, 0]));
//expected [0,1,2]
console.log(sortColors([2, 0, 1]));
//expected[0,1,2]
console.log(sortColors([1, 2, 0]));
