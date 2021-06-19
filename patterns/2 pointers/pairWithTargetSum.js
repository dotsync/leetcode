const pairWithTargetSum = (arr, target) => {
  arr.sort((a, b) => a - b);
  // [1, 2, 3, 4, 6] target 6
  //  l           r
  // l + r = 7 too high, move right
  // [1, 2, 3, 4, 6] target 6
  //  l        r
  // l + r = 5 too low, move left
  // [1, 2, 3, 4, 6] target 6
  //     l    r
  // l + r = 6 === target return indices
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    // recalculate sum at each iteration
    let currentSum = arr[left] + arr[right];
    // if sum == target, return indices,
    if (currentSum === target) return [left, right];
    // currentSum less than target, we need to increase current sum
    else if (currentSum < target) left++;
    // else currentSum is greater than target so we need to descrease currentSum
    else right--;
  }
  // unable to find
  return -1;
};

// time O(n log n) (sorting) if already sorted, time would be O(n)
// space O(1)

module.exports = pairWithTargetSum;
