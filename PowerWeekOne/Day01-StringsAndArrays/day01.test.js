const containerWithMostWater = require('./containerWithMostWater');
const firstUniqueChar = require('./firstUniqueChar');
const threeSum = require('./threeSum');

describe('Day01 Strings and Arrays Section', () => {
  /** ******************/
  // Easy Problems
  /** ******************/
  describe('Easy Problems', () => {
    describe('firstUniqueChar', () => {
      test('should return index of first non repeating char found', () => {
        expect(firstUniqueChar('leetcode')).toBe(0);
        expect(firstUniqueChar('loveleetcode')).toBe(2);
      });
      test('should return -1 if there are no repeating characters', () => {
        expect(firstUniqueChar('')).toBe(-1);
        expect(firstUniqueChar('aabb')).toBe(-1);
      });
    });
  });
  /** ******************/
  // Medium Problems
  /** ******************/
  describe('Medium Problems', () => {
    describe('containerWithMostWater', () => {
      test('should return 0 when given an empty input', () => {
        expect(containerWithMostWater([])).toBe(0);
      });
      test('should return the amount of the most possible water', () => {
        expect(containerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
        expect(containerWithMostWater([1, 1])).toBe(1);
      });
    });
    describe('threeSum', () => {
      test('should return all the triplets that sum to 0', () => {
        const actual = threeSum([-1, 0, 1, 2, -1, -4]);
        expect(actual).toStrictEqual([[-1, -1, 2], [-1, 0, 1]]);
      });
      test('should return [] if there are no triplets that sum to 0', () => {
        expect(threeSum([])).toStrictEqual([]);
        expect(threeSum([0])).toStrictEqual([]);
        expect(threeSum([0, 1])).toStrictEqual([]);
      });
    });
  });
  /** ******************/
  // Hard Problems
  /** ******************/
  describe('Hard Problems', () => {

  });
});
