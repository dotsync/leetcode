const isOneAway = (string1, string2) => {
  // if (typeof string1 !== 'string' || typeof string2 !== 'string') return false;
  const length1 = string1.length;
  const length2 = string2.length;
  // if (length1 >= (length2 + 2) || length1 <= (length2 - 2)) return false;
  // let missMatches = 0;
  // const string1Hash = {}
  // for (let i = 0; i < length1; i++) {
  //   string1Hash[string1[i]] = true;
  // }
  // // check s2
  // if (length1 !== length2) missMatches++;
  // for (let j = 0; j < length2; j++) {
  //   if (missMatches >= 2) return false
  //   if (!string1Hash[string2[j]]) missMatches++;
  // }
  // return true

  if (Math.abs(length1 - length2) > 1) return false;

  const s1 = length1 < length2 ? string1 : string2;
  const s2 = length1 > length2 ? string2 : string1;

  let index1 = 0, index2 = 0, foundDifference = false;
  while (index2 < length2 && index1 < length1) {

    if (s1[index1] !== s2[index2]) {
      if (foundDifference) return false;
      foundDifference = true;
      if (s1.length == s2.length) index1++;
    } else {
      index1++;
    }
    index2++;
  }
  return true;
}
// const tester = (actual, expected) => {
//   if (actual === expected) console.log('passed');
//   else console.log('failed');
// };
// tester(isOneAway('pale', 'ale'), true);
// tester(isOneAway('pales', 'pale'), true);
// tester(isOneAway('pale', 'bale'), true);
// tester(isOneAway('pale', 'bake'), false);
// tester(isOneAway('pale', 'alpe'), false);

// Time: O(ab)
// Space: O(a)
