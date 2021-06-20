const smallestSubarrayForGivenSum = (arr, s) => {
  let smallestWindow = Infinity;
  let windowSum = 0;
  let windowStart = 0;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];
    while (windowSum >= s) {
      smallestWindow = Math.min(smallestWindow, windowEnd - windowStart + 1);
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }
  return smallestWindow === Infinity ? 0 : smallestWindow;
};

module.exports = smallestSubarrayForGivenSum;
