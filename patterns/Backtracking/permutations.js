/* eslint-disable require-jsdoc */
const findPermutations = (nums) => {
  const res = [];
  permutation(nums, 0, nums.length - 1, res);
  return res;
};

function permutation(arr, pos, n, res) {
  if (pos === n) {
    res.push([...arr]);
  } else {
    for (let x = pos; x <= n; x++) {
      swap(arr, pos, x);
      permutation(arr, pos + 1, n, res);
      swap(arr, pos, x);
    }
  }
}

function swap(arr, index1, index2) {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

module.exports = findPermutations;
