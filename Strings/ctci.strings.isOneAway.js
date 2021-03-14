const isOneAway = (string1, string2) => {

  const length1 = string1.length;
  const length2 = string2.length;

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

// Time: O(ab)
// Space: O(a)

module.exports = isOneAway
