const sieveOfEratosthenes = require('./Logic')

describe('SieveOfEratosthenes', () => {
  test('should return an empty array if n is less than 2', () => {
    expect(sieveOfEratosthenes(1)).toStrictEqual([])
  })
  test('should return a list of all the prime numbers found between 2 and n', () => {
    const expected = [2, 3, 5, 7, 11, 13]
    expect(SieveOfEratosthenes(13)).toStrictEqual(expected)
  })
})

