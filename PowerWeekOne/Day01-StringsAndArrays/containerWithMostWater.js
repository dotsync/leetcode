function containerWithMostWater(height) {
  let maxWater = 0;
  let leftPointer = 0;
  let rightPointer = height.length - 1;

  while (leftPointer < rightPointer) {
    // maxWater = Math.max(maxWater, Math.min(height[leftPointer], height[rightPointer]) * (height[rightPointer] - 1));
    // if (height[leftPointer] < height[rightPointer]) {
    //   leftPointer++;
    // } else {
    //   rightPointer--;
    // }

    let min = Math.min(height[leftPointer], height[rightPointer])
    maxWater = Math.max(maxWater, min * (rightPointer - leftPointer))
    if (height[leftPointer] < height[rightPointer]) {
      leftPointer++
    } else {
      rightPointer--
    }
  }
  return maxWater;
}

module.exports = containerWithMostWater;
