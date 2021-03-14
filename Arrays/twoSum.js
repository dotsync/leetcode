/*
https://leetcode.com/problems/two-sum/

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
*/

const twoSum = function (arr, target) {
  const numbersSeen = {};
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i]
    let opposite = target - current
    if (numbersSeen[opposite] >= 0) {
      return [numbersSeen[opposite], i]
    } else {
      numbersSeen[current] = i
    }
  }
}

module.exports = twoSum;
// time: o(n)
// space: 0(1)


// Improve space complexity would mean to first sort the input array.
// Best sorting algorthm for a worst case would b O (n log n)? So where
// space is needed we can implement sort. From there, start pointers on either end.
// The logic is that we need to ask does start + end === result? no. move either the start or end based upon if target is smaller than the calculation, increase start, else target is larger so move end pointer to the left to become smaller. stop when start >= end.
// this will result in O(n log n) for time and 0(1) for space


console.log(twoSum([2, 7, 11, 15], 9)) // -> [0, 1]
