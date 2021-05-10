const longestSubstringWithSameLettersAfterReplacement = (string, k) => {
  let windowStart = 0;
  let maxLength = 0;
  let maxRepeatCount = 0;
  const frequencyHash = {};

  for (let windowEnd = 0; windowEnd < string.length; windowEnd++) {
    if (!(frequencyHash[string[windowEnd]])) {
      frequencyHash[string[windowEnd]] = 0;
    }
    frequencyHash[string[windowEnd]] ++;
    maxRepeatCount = Math.max(maxRepeatCount, frequencyHash[string[windowEnd]]);

    if (windowEnd - windowStart + 1 - maxRepeatCount > k) {
      frequencyHash[string[windowStart]] --;
      windowStart++;
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart +1);
  }
  return maxLength;
};

module.exports = longestSubstringWithSameLettersAfterReplacement;
