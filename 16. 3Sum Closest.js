var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  const passed = [];
  let minDiff = Number.MAX_VALUE;
  let s;
  for (let i = 0; i < nums.length; i++) {
    if (passed.includes(nums[i])) i++;
    else passed.push(nums[i]);

    for (let l = i + 1, r = nums.length - 1; l < r; ) {
      let sum = nums[i] + nums[l] + nums[r];
      if (sum === target) return sum;
      else if (sum > target) {
        r--;
      } else {
        l++;
      }
      if (Math.abs(target - sum) < minDiff) {
        minDiff = Math.abs(target - sum);
        s = sum;
      }
    }
  }
  return s;
};

//expected: 2
const t1 = threeSumClosest([-1, 2, 1, -4], 1);
t1;

//expected: 0
const t2 = threeSumClosest([0, 0, 0], 1);
t2;
