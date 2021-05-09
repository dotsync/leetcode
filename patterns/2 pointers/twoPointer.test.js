/* eslint-disable max-len */
const pairWithTargetSum = require('./pairWithTargetSum');
const removeDuplicates = require('./removeDuplicates');

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
  describe('removeDuplicates', () => {
    test('should return length of origional array if there are no duplicates', () => {
      expect(removeDuplicates([1, 2, 3])).toBe(3);
    });
    test('should retun length of modified array without duplicates', () => {
      expect(removeDuplicates([1, 2, 3, 3])).toBe(3);
      expect(removeDuplicates([1, 1, 2, 3, 3])).toBe(3);
      expect(removeDuplicates([1, 1, 1, 3])).toBe(2);
      expect(removeDuplicates([1, 1, 1, 1])).toBe(1);
    });
  });
});
