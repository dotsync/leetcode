const isOneAway = require('./ctci.strings.isOneAway');
const uRLify = require('./ctci.strings.uRLify');

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
  })
})
