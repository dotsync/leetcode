const maximumSumSubarrayOfSizeK = (array, k) => {
  let maxSum = 0;
  let currentSum = 0;
  if (k > array.length) return null;
  // create initial window
  for (let i = 0; i < k; i++) {
    maxSum += array[i];
  }
  // set current sum to be initial window
  currentSum = maxSum;
  // move window
  for (let i = k; i < array.length; i ++) {
    currentSum = currentSum - array[i - k] + array[i]
    // compute max
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

module.exports = maximumSumSubarrayOfSizeK;


// run time O(n)
