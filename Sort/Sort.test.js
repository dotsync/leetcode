const Sort = require('./Sort')

describe('Sorting Algorithms', () => {
  describe('#bubbleSort', () => {
    test('should return and empty arr if given an empty array', () => {
      expect(Sort.bubbleSort([])).toStrictEqual([])
    })
  })
})
