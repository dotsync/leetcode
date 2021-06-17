const permutations = require('./permutations');
const subsets = require('./subsets');

describe('Backtracking pattern', () => {
  describe('subsets', () => {
    test('should return an empty nested array if given empty input', () => {
      expect(subsets([])).toStrictEqual([[]]);
    });
    test('should return the input because the input is length 1', () => {
      expect(permutations([1])).toStrictEqual([[1]]);
    });
    test('should return all the possible subsets', () => {
      expect(subsets([1, 2])).toStrictEqual([[], [1], [1, 2], [2]]);
    });
  });

  describe('permutations', () => {
    test('should return empty array if given empty array', () => {
      expect(permutations([])).toStrictEqual([]);
    });
    test('should return the input because the input is length 1', () => {
      expect(permutations([1])).toStrictEqual([[1]]);
    });
    test('should return all possible permutations of strings', () => {
      expect(permutations(['a', 'b'])).toStrictEqual([
        ['a', 'b'],
        ['b', 'a'],
      ]);
    });
    test('should return all possible permutations', () => {
      expect(permutations([1, 2, 3])).toStrictEqual([
        [1, 2, 3],
        [1, 3, 2],
        [2, 1, 3],
        [2, 3, 1],
        [3, 2, 1],
        [3, 1, 2],
      ]);
    });
  });
});
