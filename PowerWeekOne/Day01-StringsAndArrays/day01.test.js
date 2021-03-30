const containerWithMostWater = require('./containerWithMostWater');

describe('containerWithMostWater', () => {
  test('should return 0 when given an empty input', () => {
    expect(containerWithMostWater([])).toBe(0);
  })
  test('should return the amount of the most possible water', () => {
    expect(containerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
    expect(containerWithMostWater([1, 1])).toBe(1);
  })
})
