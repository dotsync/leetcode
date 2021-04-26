const numIslands = require('./numIslands');

describe('numIslands', () => {
  test('should work with empty inputs', () => {
    expect(numIslands([])).toBe(0);
  });

  test('should return the number of islands found in 2d array', () => {
    const island = [
      ['1', '1', '1', '1', '0'],
      ['1', '1', '0', '1', '0'],
      ['1', '1', '0', '0', '0'],
      ['0', '0', '0', '0', '0'],
    ];
    expect(numIslands(island)).toBe(1);
  });
  test('should work for mutliple islands in the input array', () => {
    const island = [
      ['1', '1', '0', '0', '0'],
      ['1', '1', '0', '0', '0'],
      ['0', '0', '1', '0', '0'],
      ['0', '0', '0', '1', '1'],
    ];
    expect(numIslands(island)).toBe(3);
  });
});
