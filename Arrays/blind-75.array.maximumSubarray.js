const maximumSubarray = nums => {
  let currentSum = nums[0], maxSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}
const tester = (actual, expected) => {
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) console.log('failed');
  }
  actual.length === expected.length && console.log('passed')
}
tester(maximumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
tester(maximumSubarray([-1]), -1);
