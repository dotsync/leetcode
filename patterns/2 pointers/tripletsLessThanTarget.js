/* eslint-disable max-len */
const tripletsLessThanTarget = (numsArray, target) => {
  let count = 0;
  numsArray.sort((a, b) => a - b);
  for (let i = 0; i < numsArray.length - 2; i++) {
    let left = i + 1; let right = numsArray.length - 1;
    const difference = target - numsArray[i];
    while (left < right) {
      const pairSum = numsArray[left] + numsArray[right];
      if (pairSum < difference) {
        console.log(count, right, left)
        count += right - left;
        left++;
      } else {
        right--;
      }
    }
  }
  return count;
};

module.exports = tripletsLessThanTarget;
