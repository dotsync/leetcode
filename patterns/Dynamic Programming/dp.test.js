const fib = require('./fiboncai');
const knapsack = require('./knapsack');

describe('Dynamic Programming', () => {
  describe('fiboncai problem', () => {
    test('should return first 10 fib sequences', () => {
      expect(fib(0)).toBe(0);
      expect(fib(1)).toBe(1);
      expect(fib(2)).toBe(1);
      expect(fib(3)).toBe(2);
      expect(fib(4)).toBe(3);
      expect(fib(5)).toBe(5);
      expect(fib(6)).toBe(8);
      expect(fib(7)).toBe(13);
      expect(fib(8)).toBe(21);
      expect(fib(9)).toBe(34);
      expect(fib(10)).toBe(55);
    });
  });
  describe('knapsack problem', () => {
    test('should solve the knapsack problem', () => {
      const profits = [1, 6, 10, 16];
      const weights = [1, 2, 3, 5];
      expect(knapsack(profits, weights, 7)).toBe(22);
      expect(knapsack(profits, weights, 6)).toBe(17);
    });
  });
});
