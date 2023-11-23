/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length === 3)
    return nums.reduce((sum, num) => sum + num, 0) === 0 ? [nums] : [];
  let indexes = [...nums.keys()];
  const combinations = indexes.flatMap((v, i) =>
    indexes.slice(i + 1).map((w) => [v, w])
  );
  const map = new Map();
  for (let c of combinations) {
    const key = nums[c[0]] + nums[c[1]];
    const pair = c;
    if (map.has(key)) {
      map.set(key, map.get(key).concat([pair]));
    } else {
      map.set(key, [pair]);
    }
  }
  let results = [];
  let added = [];
  for (let i = 0; i < nums.length; i++) {
    const pairs = map.get(-nums[i]);
    if (!pairs) continue;
    for (let p of pairs) {
      if (p.includes(i)) continue;
      const item = [nums[i], nums[p[0]], nums[p[1]]];
      item.sort();
      if (!added.includes(item.join())) {
        results.push(item);
        added.push(item.join());
      }
    }
  }
  return results;
};

threeSum([-1, 0, 1, 2, -1, -4]);
