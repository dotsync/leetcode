/* eslint-disable require-jsdoc */
const findSubsets = (nums) => {
  const result = [];
  backtrack(nums, [], 0);
  return result;

  function backtrack(nums, subset, start) {
    // push a copy of the subset to the result array
    result.push([...subset]);

    // iterate nums starting at
    for (let i = start; i < nums.length; i++) {
      subset.push(nums[i]);
      console.log(subset);
      // pass in new start point.
      // Calling this forces us back to the top of a new function call,
      // allowing us to push in the modified subset before moduifying again
      backtrack(nums, subset, i + 1);
      subset.pop();
    }
  }
};

module.exports = findSubsets;
