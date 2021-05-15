/* eslint-disable max-len */
const maximumSumSubarrayOfSizeK = require('./maximumSumSubarrayOfSizeK');
const smallestSubarrayForGivenSum = require('./smallestSubarrayForGivenSum');
const longestSubstringWithKDistinctChars = require('./longestSubstringWithKDistinctChars');
const fruitsInBaskets = require('./fruitsInBaskets');
const noRepeatSubstring = require('./noRepeatSubstring');
const longestSubarrayWithOnesAfterReplacment = require('./longestSubarrayWithOnesAfterReplacment');
const longestSubstringWithSameLettersAfterReplacement = require('./longestSubstringWithSameLettersAfterReplacement');

describe('Sliding Window Problems', () => {
  describe('maximumSumSubarrayOfSizeK', () => {
    test('should return null if K is larger than input array', () => {
      expect(maximumSumSubarrayOfSizeK([1, 2, 3], 6)).toBeNull();
    });
    test('should return the maximum sum subarray', () => {
      expect(maximumSumSubarrayOfSizeK([1, 2, 3], 2)).toBe(5);
      expect(maximumSumSubarrayOfSizeK([1, 2, 3], 1)).toBe(3);
      expect(maximumSumSubarrayOfSizeK([1, 2, 3], 3)).toBe(6);
    });
    test('should return the maximum sum subarray with larger input', () => {
      expect(maximumSumSubarrayOfSizeK([1, 2, 3, 6, 1, 11, 9, 43, 2, 1, 75, 2, 2], 2)).toBe(77);
    });
  });
  describe('smallestSubarrayForGivenSum', () => {
    test('should return -1 for empty input', () => {
      expect(smallestSubarrayForGivenSum([], 7)).toBe(0);
    });
    test('should return the length of the smallest subarray the is equal to or greater than number given', () => {
      expect(smallestSubarrayForGivenSum([2, 1, 5, 2, 3, 2], 7)).toBe(2);
      expect(smallestSubarrayForGivenSum([2, 1, 5, 2, 8], 7)).toBe(1);
      expect(smallestSubarrayForGivenSum([3, 4, 1, 1, 6], 8)).toBe(3);
    });
  });
  describe('longestSubstringWithKDistinctChars', () => {
    test('should return 0 if given empty string', () => {
      expect(longestSubstringWithKDistinctChars('', 3)).toBe(0);
    });
    test('should return 0 if k = 0', () => {
      expect(longestSubstringWithKDistinctChars('araaci', 0)).toBe(0);
    });
    test('should return the longest Substring With K Distinct Chars', () => {
      expect(longestSubstringWithKDistinctChars('araaci', 2)).toBe(4);
      expect(longestSubstringWithKDistinctChars('araaci', 1)).toBe(2);
      expect(longestSubstringWithKDistinctChars('cbbebi', 3)).toBe(5);
      expect(longestSubstringWithKDistinctChars('abbbbacdeaa', 2)).toBe(6);
    });
  });
  describe('fruitsInBaskets', () => {
    test('should return 0 if given an empty row of trees', () => {
      expect(fruitsInBaskets([])).toBe(0);
    });
    test('should return the correct amount of fruits', () => {
      expect(fruitsInBaskets(['a', 'b', 'a', 'c', 'a'])).toBe(3);
      expect(fruitsInBaskets(['A', 'B', 'C', 'B', 'B', 'C'])).toBe(5);
    });
  });
  describe('noRepeatSubstring', () => {
    test('should return 0 if given an empty string', () => {
      expect(noRepeatSubstring('')).toBe(0);
    });
    test('should return the length of the largest substring with no repeating chars', () => {
      expect(noRepeatSubstring('abcacc')).toBe(3);
      expect(noRepeatSubstring('accccc')).toBe(2);
      expect(noRepeatSubstring('abccde')).toBe(3);
    });
  });
  describe('longestSubstringWithSameLettersAfterReplacement', () => {
    test('should return the longest Substring With Same Letters After Replacement', () => {
      expect(longestSubstringWithSameLettersAfterReplacement('aabccbb', 2)).toBe(5);
      expect(longestSubstringWithSameLettersAfterReplacement('abbcb', 1)).toBe(4);
      expect(longestSubstringWithSameLettersAfterReplacement('abccde', 1)).toBe(3);
    });
  });
  describe('longestSubarrayWithOnesAfterReplacment', () => {
    describe('should return the length of the longest subarray ', () => {
      test('With large inputs ', () => {
        const input = [0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1];
        /*                            1  1  1  1  1  1    */
        const actual = longestSubarrayWithOnesAfterReplacment(input, 2);
        expect(actual).toBe(6);
      });
    });
  });
});
