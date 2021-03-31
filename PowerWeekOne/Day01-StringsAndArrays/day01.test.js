const containerWithMostWater = require('./containerWithMostWater');
const firstUniqueChar = require('./firstUniqueChar');

describe('Day01 Strings and Arrays Section', () => {
  /********************/
  // Easy Problems
  /********************/
  describe('Easy Problems', () => {
    describe('firstUniqueChar', () => {
      test('should the index at which the first non repeat character can be found', () => {
        expect(firstUniqueChar('leetcode')).toBe(0);
        expect(firstUniqueChar('loveleetcode')).toBe(2);
      })
      test('should return -1 if there are no repeating characters', () => {
        expect(firstUniqueChar('')).toBe(-1);
        expect(firstUniqueChar('aabb')).toBe(-1);
      })

    })
  })
  /********************/
  // Medium Problems
  /********************/
  describe('Medium Problems', () => {
    describe('containerWithMostWater', () => {
      test('should return 0 when given an empty input', () => {
        expect(containerWithMostWater([])).toBe(0);
      })
      test('should return the amount of the most possible water', () => {
        expect(containerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
        expect(containerWithMostWater([1, 1])).toBe(1);
      })
    })
  })
  /********************/
  // Hard Problems
  /********************/
  describe('Hard Problems', () => {

  })
})
