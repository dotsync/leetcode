/* eslint-disable max-len */
const pairWithTargetSum = require('./pairWithTargetSum');
const removeDuplicates = require('./removeDuplicates');
const squaringASortedArray = require('./squaringASortedArray');
const tripleSumToZero = require('./tripleSumToZero');
const tripleClosestToTarget = require('./tripleClosestToTarget');
const tripletsLessThanTarget = require('./tripletsLessThanTarget');
const subArraysWithProductLessThanTarget = require('./subArraysWithProductLessThanTarget');

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
  describe('squaringASortedArray', () => {
    test('should return an empty array if given invalid input', () => {
      expect(squaringASortedArray([])).toStrictEqual([]);
    });
    test('should return a sorted array of squared numbers', () => {
      expect(squaringASortedArray([0, 0, 0, 0, 0])).toStrictEqual([0, 0, 0, 0, 0]);
      expect(squaringASortedArray([-2, -1, 0, 2, 3])).toStrictEqual([0, 1, 4, 4, 9]);
      expect(squaringASortedArray([-3, -1, 0, 1, 2])).toStrictEqual([0, 1, 1, 4, 9]);
    });
  });
  describe('tripleSumToZero', () => {
    test('should return empty array because given input is less than 3', () => {
      expect(tripleSumToZero([])).toStrictEqual([]);
      expect(tripleSumToZero([1])).toStrictEqual([]);
      expect(tripleSumToZero([1, 2])).toStrictEqual([]);
    });
    test('should should return empty array because no triplets exist ', () => {
      expect(tripleSumToZero([-3, -3, -3])).toStrictEqual([]);
      expect(tripleSumToZero([4, 5, 6])).toStrictEqual([]);
      expect(tripleSumToZero([-3, -9, 2])).toStrictEqual([]);
      expect(tripleSumToZero([0, 1, -3])).toStrictEqual([]);
    });
    test('should should return the triplets that sum to zero', () => {
      expect(tripleSumToZero([-3, 2, 1])).toStrictEqual([[-3, 1, 2]]);
      expect(tripleSumToZero([-3, 0, 1, 2, -1, 1, -2])).toStrictEqual([[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]]);
      expect(tripleSumToZero([-5, 2, -1, -2, 3])).toStrictEqual([[-5, 2, 3], [-2, -1, 3]]);
    });
    test('should ignore zeros and return triplet', () => {

    });
  });
  describe('tripleClosestToTarget', () => {
    test('should return sum of all digits if given less then 3 digits in input', () => {
      const input = [3, 2];
      expect(tripleClosestToTarget(input, 100)).toBe(5);
    });
    test('should return the sum of the 3 digits that are closest to target', () => {
      let input = [3, 2, 2];
      expect(tripleClosestToTarget(input, 4)).toBe(7);
      input = [1, 1, 1, 0], target = 40;
      expect(tripleClosestToTarget(input, target)).toBe(3);
      input = [1, 1, 1, 38], target = 40;
      expect(tripleClosestToTarget(input, target)).toBe(40);
      input = [1, 1, 1, 39], target = 40;
      expect(tripleClosestToTarget(input, target)).toBe(41);
      input = [1, 1, 1, 37], target = 40;
      expect(tripleClosestToTarget(input, target)).toBe(39);
    });
  });
  describe('tripletsLessThanTarget', () => {
    test('should return the amount of triplets less than target', () => {
      expect(tripletsLessThanTarget([-1, 0, 2, 3], 3)).toBe(2);
      expect(tripletsLessThanTarget([-1, 4, 2, 1, 3], 5)).toBe(4);
    });
  });
  describe('subArraysWithProductLessThanTarget', () => {
    test('should return the subArrays in which the product is less than the target', () => {
      expect(subArraysWithProductLessThanTarget([1], 1)).toBe(1);
    });
  });
});
