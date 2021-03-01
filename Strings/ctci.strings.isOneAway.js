const isOneAway = (string1, string2) => {
  if (typeof string1 !== 'string' || typeof string2 !== 'string') return false;
  const length1 = string1.length;
  const length2 = string2.length;
  if (length1 >= (length2 + 2) || length1 <= (length2 - 2)) return false;
  let missMatches = 0;
  const string1Hash = {}
  for (let i = 0; i < length1; i++) {
    string1Hash[string1[i]] = true;
  }
  // check s2
  if (length1 !== length2) missMatches++;
  for (let j = 0; j < length2; j++) {
    if (missMatches >= 2) return false
    if (!string1Hash[string2[j]]) missMatches++;
  }
  return true
}
const tester = (actual, expected) => {
  if (actual === expected) console.log('passed');
  else console.log('failed');
};
tester(isOneAway('pale', 'ale'), true);
tester(isOneAway('pales', 'pale'), true);
tester(isOneAway('pale', 'bale'), true);
tester(isOneAway('pale', 'bake'), false);

// Time: O(ab)
// Space: O(a)

