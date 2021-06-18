/* eslint-disable require-jsdoc */
const findPermutations = (nums) => {
  const result = [];
  permutation(nums, 0, nums.length - 1, result);
  return result;
};

function permutation(arr, index, n, result) {
  if (index === n) {
    result.push([...arr]);
  } else {
    for (let i = index; i <= n; i++) {
      swap(arr, index, i);
      permutation(arr, index + 1, n, result);
      swap(arr, index, i);
    }
  }
}

function swap(arr, index1, index2) {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

module.exports = findPermutations;
