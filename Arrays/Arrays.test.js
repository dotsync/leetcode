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

