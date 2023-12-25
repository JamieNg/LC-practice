var characterReplacement = function (s, k) {
  const count = new Map();
  let max = (maxf = 0);
  for (let l = (r = 0); r < s.length; r++) {
    let f = (count.get(s[r]) || 0) + 1;
    count.set(s[r], f);
    maxf = Math.max(maxf, f);
    if (r - l + 1 - maxf <= k) {
      max = Math.max(max, r - l + 1);
    } else {
      count.set(s[l], count.get(s[l]) - 1);
      l++;
    }
  }
  return max;
};

//expect: 4
console.log(characterReplacement("ABAB", 2));

//expect: 4
console.log(characterReplacement("AABABBA", 1));
