var minSubArrayLen = function (target, nums) {
  if (nums[0] >= target) return 1;
  if (nums.length === 1) return 0;
  let mLength = Number.MAX_VALUE;
  sum = nums[0];
  for (let l = 0, r = 1; r < nums.length; r++) {
    sum += nums[r];
    while (sum >= target) {
      mLength = Math.min(mLength, r - l + 1);
      sum -= nums[l];
      l++;
    }
  }
  return mLength === Number.MAX_VALUE ? 0 : mLength;
};

let t1 = minSubArrayLen(7, [2, 3, 1, 2, 4, 3]);
t1; //expected: 2

let t2 = minSubArrayLen(4, [1, 4, 4]);
t2; //expected: 1

let t3 = minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]);
t3; //expected: 0

let t4 = minSubArrayLen(6, [10, 3, 4]);
t4; //expected: 1

let t5 = minSubArrayLen(6, [3, 3, 10]);
t5; //expected: 1
