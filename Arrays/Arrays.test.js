const bestTimeToBuyAndSellStock = require('./bestTimeToBuyAndSellStock');
const containsDuplicate = require('./containsDuplicate');
const maximumSubarray = require('./maximumSubarray');
const productOfArrayExceptSelf = require('./productOfArrayExceptSelf');
const twoSum = require('./twoSum');
const rotateMatrix = require('./rotateMatrix');
const plusOne = require('./plusOne');
const intersect = require('./intersect');



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
    describe('containsDuplicate()', () => {
      /* Given an array of integers, find if the array contains any duplicates. */
      test('should return whether or not the array contains duplicate', () => {
        expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
        expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
        expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
      })
    })
    describe('plusOne', () => {
      test('should work with empty input', () => {
        expect(plusOne([])).toStrictEqual([])
      })
      test('should increase the arrays last digit by one', () => {
        expect(plusOne([1, 2, 3])).toStrictEqual([1, 2, 4])
        expect(plusOne([1, 2, 9])).toStrictEqual([1, 3, 0])
      })
      test('should work when all digits are 9s', () => {
        expect(plusOne([9])).toStrictEqual([1, 0])
        expect(plusOne([9, 9, 9])).toStrictEqual([1, 0, 0, 0])
      })
    })
    describe('intersect', () => {
      test('should work if there are no intersects', () => {
        expect(intersect([1, 2, 3], [4, 5, 6])).toStrictEqual([])
        expect(intersect([1, 2, 3], [6])).toStrictEqual([])
        expect(intersect([3], [6, 2, 2, 2, 7])).toStrictEqual([])
      })
      test('should return all the intersects between two arrays', () => {
        expect(intersect([1, 2, 2, 1], [2, 2])).toStrictEqual([2, 2])
        expect(intersect([4, 9, 5], [9, 4, 9, 8, 4])).toStrictEqual([4, 9])
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

