var trap = function (height) {
  let result = 0;

  for (let [i, lMax, rMax] = [0, 0, 0]; i < height.length; i++) {
    lMax = height[i] > height[lMax] ? i : lMax;
    if (i > rMax) {
      let k;
      rMax = k = i;
      while (k < height.length) {
        rMax = height[k] > height[rMax] ? k : rMax;
        k++;
      }
    }
    result += Math.min(height[lMax], height[rMax]) - height[i];
  }
  return result;
};

//expected 6
let t1 = trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
t1;

//expected 9
let t2 = trap([4, 2, 0, 3, 2, 5]);
t2;
