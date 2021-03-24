const Vertex = require('./Vertex')

describe('Vertex class', () => {
  test('should store data and have a list of edges', () => {
    const vertex = new Vertex('some data');
    expect(vertex.edges).toStrictEqual([]);
    expect(vertex.data).toBe('some data');
  })

  describe('Vertex Methods', () => {

  })

})

