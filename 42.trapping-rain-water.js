var trap = function (height) {
  let total = 0;
  let lMax = height[0],
    rMax = height[height.length - 1];
  for (let l = 0, r = height.length - 1; l < r; ) {
    if (lMax <= rMax) {
      total += lMax - height[l];
      l++;
      lMax = Math.max(height[l], lMax);
    } else {
      total += rMax - height[r];
      r--;
      rMax = Math.max(height[r], rMax);
    }
  }
  return total;
};

//expected 6
let t1 = trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
t1;

//expected 9
let t2 = trap([4, 2, 0, 3, 2, 5]);
t2;
