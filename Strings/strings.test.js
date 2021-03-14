const isOneAway = require('./ctci.strings.isOneAway');
const uRLify = require('./ctci.strings.uRLify');
const stringCompression = require('./ctci.strings.stringCompression')
const permutationIsPalindrome = require('./ctci.strings.permutationIsPalindrome')
const isPermutation = require('./ctci.strings.isPermutation')

describe('Strings', () => {
  describe('Cracking The Coding Interview', () => {
    describe('isOneAway()', () => {
      test('should check if s1 and s2 are one char away from being the same', () => {
        expect(isOneAway('pale', 'ale')).toBe(true);
        expect(isOneAway('pales', 'pale')).toBe(true);
        expect(isOneAway('pale', 'bale')).toBe(true);
        expect(isOneAway('pale', 'bake')).toBe(false);
        expect(isOneAway('pale', 'alpe')).toBe(false);
      })
    })
    describe('uRLify()', () => {
      test('should replace spaces with %20', () => {
        expect(uRLify('Mr John Smith    ', 13)).toBe('Mr%20John%20Smith')
      })
    })
    describe('stringCompression()', () => {
      test('should compress the string meaning all repeats are removed and indicated', () => {
        expect(stringCompression('aabcccccaa')).toBe('a2b1c5a2')
      })
      test('should not compress because all letters are different ', () => {
        expect(stringCompression('abc')).toBe('abc')
      })
    })
    describe('permutationIsPalindrome()', () => {
      expect(permutationIsPalindrome('TactCoa')).toBe(true)
      expect(permutationIsPalindrome('!Tact Coa')).toBe(true)
      expect(permutationIsPalindrome('!Tactt Coa')).toBe(false)
      expect(permutationIsPalindrome('!Tacttt Coa')).toBe(true)
    })
    describe('isPermutation()', () => {
      expect(isPermutation('hello', 'olhel')).toBe(true)
      expect(isPermutation('hello', 'nadda')).toBe(false)
    })
    describe('isUniqueString()', () => {
      // console.log(isUniqueString('hello')) // false
      // console.log(isUniqueString('help')) // true
    })
  })
})
