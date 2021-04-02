const fib = require('./fibonacci');
const generateParenthesis = require('./generateParenthesis');

describe('Day04 Recursion Section', () => {
  /** ******************/
  // Easy Problems
  /** ******************/
  describe('Easy Problems', () => {
    describe('Fibonacci Problem', () => {
      test('should return 0 if input is 0', () => {
        expect(fib(0)).toBe(0);
      });
      test('should return 1 if input is 1', () => {
        expect(fib(1)).toBe(1);
      });
      test('should return the fibonacci of the given n', () => {
        expect(fib(4)).toBe(3);
        expect(fib(5)).toBe(5);
        expect(fib(7)).toBe(13);
        expect(fib(11)).toBe(89);
        expect(fib(28)).toBe(317811);
      });
    });
  });
  /** ******************/
  // Medium Problems
  /** ******************/
  describe('Medium Problems', () => {
    describe('generateParenthesis', () => {
      test('should return emtpy list when n is 0', () => {
        expect(generateParenthesis(0)).toStrictEqual(['']);
      });
      test('should generate a list of all possible combinations', () => {
        expect(generateParenthesis(1)).toStrictEqual(['()']);
        const expected = ['((()))', '(()())', '(())()', '()(())', '()()()'];
        expect(generateParenthesis(3)).toStrictEqual(expected);
      });
    });
  });
  /** ******************/
  // Hard Problems
  /** ******************/
  describe('Hard Problems', () => {
  });
});
