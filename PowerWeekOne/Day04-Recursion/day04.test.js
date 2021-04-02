const fibonacci = require('./fibonacci');

describe('Day04 Recursion Section', () => {
  /** ******************/
  // Easy Problems
  /** ******************/
  describe('Easy Problems', () => {
    describe('Fibonacci Problem', () => {
      test('should return 0 if input is 0', () => {
        expect(fibonacci(0)).toBe(0);
      });
      test('should return 1 if input is 1', () => {
        expect(fibonacci(1)).toBe(1);
      });
      test('should return the fibonacci of the given n', () => {
        expect(fibonacci(4)).toBe(24);
        expect(fibonacci(5)).toBe(120);
      });
    });
  });
  /** ******************/
  // Medium Problems
  /** ******************/
  describe('Medium Problems', () => {
  });
  /** ******************/
  // Hard Problems
  /** ******************/
  describe('Hard Problems', () => {
  });
});
