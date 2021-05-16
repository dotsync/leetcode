/* eslint-disable max-len */
/* eslint-disable valid-jsdoc */
/**
 *Given an array of unsorted numbers and a target number,
 find a triplet in the array whose sum is as close
 to the target number as possible,
 return the sum of the triplet.
 If there are more than one such triplet,
 return the sum of the triplet with the smallest sum.
input = [7,1,4,2] targetNumber = 20
output = 13 becase 4 + 2 + 7

target 3
-1, 2, 1 = 2 return this because smaller
-1, 2, 3 = 4
 */
const tripleClosestToTarget = (arr, targetSum) => {
  arr.sort((a, b) => a - b);
  if (arr.length <= 3) {
    return arr.reduce((num, sum) => sum += num);
  };
  let smallestDifference = Infinity;
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      const targetDiff = targetSum - arr[i] - arr[left] - arr[right];
      if (targetDiff === 0) { // we've found a triplet with an exact sum
        return targetSum - targetDiff; // return sum of all the numbers
      }

      if (Math.abs(targetDiff) < Math.abs(smallestDifference)) {
        smallestDifference = targetDiff; // save the closest difference
      }
      // the second part of the following 'if' is to handle the smallest sum when we have more than one solution
      if (Math.abs(targetDiff) < Math.abs(smallestDifference) ||
        (Math.abs(targetDiff) === Math.abs(smallestDifference) && targetDiff > smallestDifference)) {
        smallestDifference = targetDiff; // save the closest and the biggest difference
      }

      if (targetDiff > 0) {
        left += 1; // we need a triplet with a bigger sum
      } else {
        right -= 1; // we need a triplet with a smaller sum
      }
    }
  }
  return targetSum - smallestDifference;
};

module.exports = tripleClosestToTarget;
