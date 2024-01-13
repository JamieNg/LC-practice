var findMin = function (nums) {
  for (let l = 0, r = nums.length - 1; l <= r; ) {
    mid = Math.ceil((r + l) / 2);
    if (mid == l || nums[mid] < nums[mid - 1]) return nums[mid];
    else if (nums[mid] > nums[r]) {
      l = mid + 1;
    } else r = mid - 1;
  }
};

//expect: 1
console.log(findMin([3, 4, 5, 1, 2]));

//expect: 0
console.log(findMin([4, 5, 6, 7, 0, 1, 2]));

//expect: 11
console.log(findMin([11, 13, 15, 17]));

console.log(findMin([2, 3, 4, 5, 6, 1]));
