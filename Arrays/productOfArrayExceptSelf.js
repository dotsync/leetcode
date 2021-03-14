/* Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.) */
function productOfArrayExceptSelf(arr) {

  for (let i = 0; i < arr.length; i++) {
    let multiplier = 1;
    let rp = arr.length - 1;
    let count = 1;
    while (rp !== i) {
      console.log('rp', rp)
      count *= arr[rp];
      rp--;
    }
    console.log(arr[i], multiplier)
    multiplier *= arr[i];
    console.log('mutliplier', multiplier)
    arr[i] = count;
  }
  console.log(arr)
  return arr;
}

module.exports = productOfArrayExceptSelf;
// const tester = (actual, expected) => {
//   if (actual === expected) console.log('passed');
//   else console.log('failed');
// };
// tester(productOfArrayExceptSelf([1, 2, 3, 4]), [24, 12, 8, 6]);
