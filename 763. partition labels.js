var partitionLabels = function (s) {
  const firstAppearance = new Map();
  const r = [];
  for (let i = 0; i < s.length; i++) {
    if (firstAppearance.has(s[i])) {
      let first = firstAppearance.get(s[i]);
      let range = r.pop();
      while (range != null && (first > range[1] || first < range[0]))
        range = r.pop();
      if (range) {
        range[1] = i;
        r.push(range);
      }
    } else {
      firstAppearance.set(s[i], i);
      r.push([i, i]);
    }
  }
  return r.map((i) => i[1] - i[0] + 1);
};

var t1 = partitionLabels("ababcbacadefegdehijhklij");
t1; //expected: [9,7,8]

var t2 = partitionLabels("eccbbbbdec");
t2; //expected: [10]
