const isPermutation = (s1, s2) => {
  if (s1.length !== s2.length) return false;
  // create hash from string 1
  const s1Hash = {};
  for (let i = 0; i < s1.length; i++) {
    if (s1Hash[s1[i]]) s1Hash[s1[i]]++;
    else {
      s1Hash[s1[i]] = 1;
    };
  }
  // iterate s2 and check if char exists in hash
  for (let j = 0; j < s2.length; j++) {
    if (!s1Hash[s2[j]]) return false;
    else {
      s1Hash[s2[j]]--;
    };
  }
  return true;
};

module.exports = isPermutation;
