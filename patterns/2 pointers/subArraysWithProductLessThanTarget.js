const Deque = require('collections/deque');
// http://www.collectionsjs.com

const subArraysWithProductLessThanTarget = (nums, target) => {
  const result = [];
  let product = 1;
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    // if (nums[i] >= target) continue;
    // push current num
    // result.push([nums[i]]);
    product *= nums[right];
    while (product >= target && left < nums.length) {
      product /= nums[left];
      left += 1;
    }
    const tempList = new Deque();
    for (let i = right; i > left - 1; i--) {
      tempList.unshift(nums[i]);
      result.push(tempList.toArray());
    }
  };
  return result;
};

module.exports = subArraysWithProductLessThanTarget;
