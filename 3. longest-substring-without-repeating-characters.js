var lengthOfLongestSubstring = function (s) {
  if (s.length === 1 || s.length === 0) return s.length;
  const lastApr = new Map();
  let max = 0;
  for (let r = 0, l = 0; r < s.length; r++) {
    let last = lastApr.get(s[r]);
    if (last !== undefined && last >= l) l = last + 1;
    max = Math.max(max, r - l + 1);
    lastApr.set(s[r], r);
  }
  return max;
};

let t1 = lengthOfLongestSubstring("abcabcbb");
t1; //expected: 3

let t2 = lengthOfLongestSubstring("bbbbb");
t2; //expected: 1

let t3 = lengthOfLongestSubstring("pwwkew");
t3; //expected:  3
