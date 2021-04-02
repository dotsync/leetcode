const threeSum = (nums) => {
  nums.sort((a, b) => a - b);
  const triplets = [];

  for (let i = 0; i < nums.length && nums[i] <= 0; i++) {
    if (i === 0 || nums[i - 1] != nums[i]) {
      twoSum(nums, i, triplets);
    }
  }
  return triplets;
  /**
   * @param {array} nums Array of numbers to check
   * @param {int} i Current index
   * @param {array} triplets Result array
   */
  function twoSum(nums, i, triplets) {
    let low = i + 1;
    let high = nums.length - 1;
    while (low < high) {
      const sum = nums[i] + nums[low] + nums[high];
      if (sum < 0) {
        low++;
      } else if (sum > 0) {
        high--;
      } else {
        triplets.push([nums[i], nums[low++], nums[high--]]);
        while (low < high && nums[low] == nums[low - 1]) {
          low++;
        }
      }
    }
  }
};

module.exports = threeSum;
