/* eslint-disable max-len */
const pairWithTargetSum = require('./pairWithTargetSum');

describe('twoPointer Pattern', () => {
  describe('pairWithTargetSum', () => {
    test('should return -1 if target cannot be found', () => {
      expect(pairWithTargetSum([1, 2], 7)).toBe(-1);
      expect(pairWithTargetSum([4, 7], 7)).toBe(-1);
    });
    test('should return -1 if given an empty array', () => {
      expect(pairWithTargetSum([], 7)).toBe(-1);
    });
    test('should return the indeces at which the compliments are found', () => {
      expect(pairWithTargetSum([1, 2], 3)).toStrictEqual([0, 1]);
      expect(pairWithTargetSum([1, 2, 3, 5], 4)).toStrictEqual([0, 2]);
    });
    test('should return the indeces at which the first compliments are found', () => {
      expect(pairWithTargetSum([1, 4, 5, 6, 7, 8], 9)).toStrictEqual([0, 5]);
    });
  });
});
