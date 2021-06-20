const fib = require('./fiboncai');

describe('Dynamic Programming', () => {
  describe('fiboncai problem', () => {
    test('should return the fib of n', () => {
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
    });
  });
});
