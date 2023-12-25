var checkInclusion = function (s1, s2) {
  const buildMap = (s) => {
    const map = new Map();
    for (let c of s) map.set(c, (map.get(c) ?? 0) + 1);
    return map;
  };

  const compareMap = (m1, m2) => {
    for (let [k, v] of m1) {
      if (v !== m2.get(k)) return false;
    }
    return true;
  };

  const map1 = buildMap(s1);
  const map2 = buildMap(s2.substring(0, s1.length));
  for (let l = 0, r = s1.length - 1; r < s2.length; ) {
    if (compareMap(map1, map2)) return true;
    r++;
    map2.set(s2[l], map2.get(s2[l]) - 1);
    map2.set(s2[r], (map2.get(s2[r]) ?? 0) + 1);
    l++;
  }
  return false;
};
console.log(checkInclusion("adc", "dcda"));
//expected: true
console.log(checkInclusion("ab", "eidbaooo"));

//expected: false
console.log(checkInclusion("ab", "eidboaoo"));
