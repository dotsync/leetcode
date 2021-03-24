const Graph = require('./Graph');

describe('Graph v2 class', () => {
  test('shall be born with an empty vertices list', () => {
    const graph = new Graph
    expect(graph.vertices).toStrictEqual([])
  })
  describe('Graph v2 Methods', () => {
    describe('#addVertex', () => {
      test('should add two vertices to the graph', () => {
        const graph = new Graph
        graph.addVertex(6)
        graph.addVertex('3')
        expect(graph.vertices.length).toBe(2)
        expect(graph.vertices[0].data).toBe(6)
        expect(graph.vertices[1].data).toBe('3')
      })
    })
  })
})

