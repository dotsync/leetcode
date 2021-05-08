const longestSubstringWithKDistinctChars = (string, k) => {
  let characters = {},
    windowStart = 0,
    maxLength = 0;
  // iterate the input string with windowEnd being fast runner
  for (let windowEnd = 0; windowEnd < string.length; windowEnd++) {
    // check if current character is NOT in hash
    if (!(string[windowEnd] in characters)) {
      // add to hash
      characters[string[windowEnd]] = 0;
    }
    // already in hash so increase count
    characters[string[windowEnd]]++;
    // check if hash has more than K keys
    while (Object.keys(characters).length > k) {
      // update hash to prepare for removal of character
      characters[string[windowStart]] -= 1
      // if we removed the last current character from hash, remove character property
      if (characters[string[windowStart]] === 0) {
        delete characters[string[windowStart]];
      }
      // move window start to resize sliding window
      windowStart += 1
    }
    // now that the window has been adjusted to be less than or equal to K
    // update maxLength
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
  }
  return maxLength
};

module.exports = longestSubstringWithKDistinctChars;
