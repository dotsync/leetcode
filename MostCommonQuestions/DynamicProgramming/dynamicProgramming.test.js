// const bestTimeToBuyAndSellStock = require('./bestTimeToBuyAndSellStock');
const fibTopDownMemo = require('./fibTopDownMemo');

describe('Dynamic Programming Section', () => {
  /** ******************/
  // Easy Problems
  /** ******************/
  describe('Easy Problems', () => {
    describe('fibonacci Problem', () => {
      describe('top down', () => {
        test('should return the fibonacci of n', () => {
          expect(fibTopDownMemo(5)).toBe(5);
          expect(fibTopDownMemo(6)).toBe(8);
          expect(fibTopDownMemo(7)).toBe(13);
          expect(fibTopDownMemo(8)).toBe(21);
        });
      });
    });
  });
  /** ******************/
  // Medium Problems
  /** ******************/
  describe('Medium Problems', () => {
    describe('bestTimeToBuyAndSellStock Problem', () => {
    });
  });
  /** ******************/
  // Hard Problems
  /** ******************/
  describe('Hard Problems', () => {
  });
});
