const bestTimeToBuyAndSellStock = require('./bestTimeToBuyAndSellStock');
const containsDuplicate = require('./containsDuplicate');
const maximumSubarray = require('./maximumSubarray');
const productOfArrayExceptSelf = require('./productOfArrayExceptSelf');
const twoSum = require('./twoSum');
const rotateMatrix = require('./rotateMatrix');



describe('Arrays', () => {
  describe('blind75', () => {
    describe('bestTimeToBuyAndSellStock()', () => {
      test('should return the best time to buy stock in a given week', () => {
        expect(bestTimeToBuyAndSellStock([7, 1, 5, 3, 6, 4])).toBe(5);
        expect(bestTimeToBuyAndSellStock([7, 6, 4, 3, 1])).toBe(0);
      })
    })
    describe('productOfArrayExceptSelf()', () => {
      /* Note: solve without division and in O(n) */
      test('should return an array output such that output[i] is equal to the product of all the elements of nums except nums[i]', () => {
        expect(productOfArrayExceptSelf([1, 2, 3, 4])).toStrictEqual([24, 12, 8, 6]);
      })
    })
    describe('twoSum()', () => {
      /* Given an array of integers nums and an integer target,
      return indices of the two numbers such that they add up to target. */
      test('should return indices of the two numbers such that they add up to target.', () => {
        expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
        expect(twoSum([3, 2, 4], 6)).toStrictEqual([1, 2]);
        expect(twoSum([3, 3], 6)).toStrictEqual([0, 1]);
      })
      test('should return empty array if no sum is found', () => {
        expect(twoSum([2, 2, 11, 15], 9)).toBe(undefined);
        expect(twoSum([], 9)).toBe(undefined);
        expect(twoSum([2, 2, 11, 15])).toBe(undefined);
      })
    })
    describe('maximumSubarray()', () => {
      test('should return the largest continueous subarray', () => {
        expect(maximumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
        expect(maximumSubarray([-1])).toBe(-1);
      })

    })

  })
  describe('Cracking The Coding Interview', () => {
    describe('rotateMatrix', () => {
      test('should rotate matrix 90 degrees', () => {
        const rotateMatrixLargeTestInput = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]];
        const rotateMatrixLargeTestResult = [[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]];
        expect(rotateMatrix(rotateMatrixLargeTestInput)).toStrictEqual(rotateMatrixLargeTestResult);
        expect(rotateMatrix([[1, 2], [3, 4]])).toStrictEqual([[3, 1], [4, 2]]);
        expect(rotateMatrix([[1]])).toStrictEqual([[1]]);
      })
    })
  })
})

