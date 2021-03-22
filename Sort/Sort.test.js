const Sort = require('./Sort')

describe('Sorting Algorithms', () => {
  describe('#bubbleSort', () => {
    test('should return and empty arr if given an empty array', () => {
      expect(Sort.bubbleSort([])).toStrictEqual([])
    })
    test('should sort elements in an array from smallest to largest', () => {
      expect(Sort.bubbleSort([10, 9, 8, 3, 2, 1, 5, 6, 4, 7])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    })
    test('should work with inputs of only one value', () => {
      expect(Sort.bubbleSort([2])).toStrictEqual([2])
    })
    test('should work with inputs of only 2 items', () => {
      expect(Sort.bubbleSort([2, 1])).toStrictEqual([1, 2])
    })

  })
})
