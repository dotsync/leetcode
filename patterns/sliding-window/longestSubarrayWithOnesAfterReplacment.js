/* eslint-disable max-len */
const longestSubarrayWithOnesAfterReplacment = (arr, k) => {
  let windowStart = 0;
  let maxLength = 0;
  let maxOnesCount = 0;

  // Try to extend the range [windowStart, windowEnd]
  for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    if (arr[windowEnd] === 1) {
      maxOnesCount += 1;
    }
    if ((windowEnd - windowStart + 1 - maxOnesCount) > k) {
      if (arr[windowStart] === 1) {
        maxOnesCount -= 1;
      }
      windowStart += 1;
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
}

module.exports = longestSubarrayWithOnesAfterReplacment;
