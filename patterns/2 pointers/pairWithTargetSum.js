const pairWithTargetSum = (arr, target) => {
  // // return -1 if unable to find
  // let left = 0; let right = arr.length-1;
  // while (left < right) {
  //   if (arr[right] + arr[left] === target) return [left, right];
  //   else if (arr[right] + arr[left] > target) right --;
  //   else left ++;
  // }
  // return -1;
  /**
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   */
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let currentSum = arr[left] + arr[right];
    if (currentSum === target) return [left, right];
    else if (currentSum < target) left++;
    else right--;
  }
  return -1;
};

// time O(n)
// space O(1)

module.exports = pairWithTargetSum;
