const bestTimeToBuyAndSellStock = require('./bestTimeToBuyAndSellStock');
const containsDuplicate = require('./containsDuplicate');
const maximumSubarray = require('./maximumSubarray');
const productOfArrayExceptSelf = require('./productOfArrayExceptSelf');
const twoSum = require('./twoSum');



describe('Arrays', () => {
  describe('blind75', () => {
    describe('bestTimeToBuyAndSellStock()', () => {
      test('should return the best time to buy stock in a given week', () => {
        expect(bestTimeToBuyAndSellStock([7, 1, 5, 3, 6, 4])).toBe(5);
        expect(bestTimeToBuyAndSellStock([7, 6, 4, 3, 1])).toBe(0);
      })
    })
  })
})

