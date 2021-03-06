/* eslint-disable require-jsdoc */
function containerWithMostWater(height) {
  let maxWater = 0;
  let leftPointer = 0;
  let rightPointer = height.length - 1;

  while (leftPointer < rightPointer) {
    const min = Math.min(height[leftPointer], height[rightPointer]);
    maxWater = Math.max(maxWater, min * (rightPointer - leftPointer));
    if (height[leftPointer] < height[rightPointer]) {
      leftPointer++;
    } else {
      rightPointer--;
    }
  }
  return maxWater;
}

module.exports = containerWithMostWater;
