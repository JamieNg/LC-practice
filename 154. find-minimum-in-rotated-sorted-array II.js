var findMin = function (nums) {
  const fMin = (l, r) => {
    for (; l <= r; ) {
      mid = Math.ceil((r + l) / 2);
      if (mid == l || nums[mid] < nums[mid - 1]) return nums[mid];
      if (nums[l] === nums[r]) {
        let lMin = fMin(l, mid - 1);
        let rMin = fMin(mid + 1, r);
        return Math.min(lMin, rMin);
      }
      if (nums[mid] > nums[r]) {
        l = mid + 1;
      } else r = mid - 1;
    }
  };
  return fMin(0, nums.length - 1);
};

//expect: 1
console.log(findMin([1, 3, 5]));

//expect: 0
console.log(findMin([2, 2, 2, 0, 1]));

//expect: 1
console.log(findMin([10, 10, 10, 1, 10]));
console.log(findMin([10, 1, 10, 10, 10]));

console.log(findMin([2, 3, 4, 5, 6, 1]));
