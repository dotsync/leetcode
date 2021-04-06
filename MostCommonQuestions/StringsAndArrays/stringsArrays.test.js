/* eslint-disable max-len */
const containerWithMostWater = require('./containerWithMostWater');
const firstUniqueChar = require('./firstUniqueChar');
const threeSum = require('./threeSum');
const integerToEnglishWords = require('integerToEnglishWords');

describe('Strings and Arrays Section', () => {
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
    describe('integerToEnglishWords', () => {
      test('should check input', () => {
        expect(integerToEnglishWords('Hello')).toBe('Unable to Convert non Intgers');
        expect(integerToEnglishWords(NaN)).toBe('Unable to Convert non Intgers');
        expect(integerToEnglishWords(undefined)).toBe('Unable to Convert non Intgers');
      });

      test('should work for single digits', () => {
        expect(integerToEnglishWords(1)).toBe('One');
        expect(integerToEnglishWords(2)).toBe('Two');
        expect(integerToEnglishWords(3)).toBe('Three');
        expect(integerToEnglishWords(4)).toBe('Four');
        expect(integerToEnglishWords(5)).toBe('Five');
        expect(integerToEnglishWords(6)).toBe('Six');
        expect(integerToEnglishWords(7)).toBe('Seven');
        expect(integerToEnglishWords(8)).toBe('Eight');
        expect(integerToEnglishWords(9)).toBe('Nine');
        expect(integerToEnglishWords(0)).toBe('Zero');
      });
      test('should work for the teen digits', () => {
        expect(integerToEnglishWords(11)).toBe('Eleven');
        expect(integerToEnglishWords(12)).toBe('Twelve');
        expect(integerToEnglishWords(13)).toBe('Thirteen');
        expect(integerToEnglishWords(14)).toBe('Fourteen');
        expect(integerToEnglishWords(15)).toBe('Fifteen');
        expect(integerToEnglishWords(16)).toBe('Sixteen');
        expect(integerToEnglishWords(17)).toBe('Seventeen');
        expect(integerToEnglishWords(18)).toBe('Eighteen');
        expect(integerToEnglishWords(19)).toBe('Nineteen');
        expect(integerToEnglishWords(0)).toBe('Zero');
      });
      test('should work for the tenth place digit', () => {
        expect(integerToEnglishWords(10)).toBe('Ten');
        expect(integerToEnglishWords(20)).toBe('Twenty');
        expect(integerToEnglishWords(30)).toBe('Thirty');
        expect(integerToEnglishWords(40)).toBe('Forty');
        expect(integerToEnglishWords(50)).toBe('Fifty');
        expect(integerToEnglishWords(60)).toBe('Sixty');
        expect(integerToEnglishWords(70)).toBe('Seventy');
        expect(integerToEnglishWords(80)).toBe('Eighty');
        expect(integerToEnglishWords(90)).toBe('Ninty');
      });
      test('should work for the 100th place', () => {
        expect(integerToEnglishWords(100)).toBe('One Hundred');
        expect(integerToEnglishWords(101)).toBe('One Hundred One');
        expect(integerToEnglishWords(111)).toBe('One Hundred Eleven');
        expect(integerToEnglishWords(200)).toBe('Two Hundred');
        expect(integerToEnglishWords(220)).toBe('Two Hundred Twenty');
        expect(integerToEnglishWords(220)).toBe('Two Hundred Twenty One');
        expect(integerToEnglishWords(300)).toBe('Three Hundred');
        expect(integerToEnglishWords(400)).toBe('Four Hundred');
        expect(integerToEnglishWords(400)).toBe('Four Hundred');
        expect(integerToEnglishWords(500)).toBe('Five Hundred');
        expect(integerToEnglishWords(600)).toBe('Six Hundred');
        expect(integerToEnglishWords(700)).toBe('Seven Hundred');
        expect(integerToEnglishWords(800)).toBe('Eight Hundred');
        expect(integerToEnglishWords(900)).toBe('Nine Hundred');
      });
    });
  });
});
