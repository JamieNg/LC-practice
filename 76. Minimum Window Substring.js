var minWindow = function (s, t) {
  const buildMap = (s) => {
    const map = new Map();
    for (let c of s) map.set(c, (map.get(c) ?? 0) + 1);
    return map;
  };

  const isInclude = (sMap, windowMap) => {
    for (let [k, v] of windowMap) {
      if (!sMap.has(k) || sMap.get(k) < v) return false;
    }
    return true;
  };

  const wMap = buildMap(t);
  const sMap = buildMap(s.substring(0, t.length - 1));
  let window = "";
  for (let l = 0, r = t.length - 1; r < s.length; r++) {
    sMap.set(s[r], (sMap.get(s[r]) || 0) + 1);
    while (isInclude(sMap, wMap)) {
      if (!window.length || r - l + 1 < window.length)
        window = s.substring(l, r + 1);
      sMap.set(s[l], sMap.get(s[l]) - 1);
      l++;
    }
  }

  return window;
};

//expect: "BANC"
console.log(minWindow("ADOBECODEBANC", "ABC"));

//expect: "a"
console.log(minWindow("a", "a"));

//expect: ""
console.log(minWindow("a", "aa"));
