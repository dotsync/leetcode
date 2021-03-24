const Edge = require('./Edge')

describe('Edge Class', () => {
  test('should have a weight property', () => {
    const edge = new Edge
    // console.log(edge)
    expect(edge.weight).toBeNull()
  })
})

