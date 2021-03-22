const Graph = require('./Graph');

describe('Graph Class', () => {
  test('should instantiate with an adjacency list property', () => {
    const graph = new Graph
    expect(graph.adjacencyList).toStrictEqual({})
  })
  describe('Graph Methods', () => {
    describe('#addVertex', () => {
      test('should add a vertex to the graph', () => {
        const graph = new Graph
        graph.addVertex('bob')
        graph.addVertex('mary')
        graph.addVertex('joe')
        expect(graph.adjacencyList['bob']).toStrictEqual([])
        expect(graph.adjacencyList['mary']).toStrictEqual([])
        expect(graph.adjacencyList['joe']).toStrictEqual([])
      })
    })
    describe('#addEdge', () => {
      test('should add an edge inbetween two vertices', () => {
        const graph = new Graph
        graph.adjacencyList = {
          'bob': [],
          'mary': [],
          'joe': [],
          'alice': []
        }
        graph.addEdge('bob', 'mary')
        graph.addEdge('bob', 'joe')
        graph.addEdge('bob', 'alice')
        graph.addEdge('joe', 'mary')
        expect(graph.adjacencyList['bob']).toStrictEqual(['mary', 'joe', 'alice'])
        expect(graph.adjacencyList['bob'].length).toBe(3)
        expect(graph.adjacencyList['joe'].length).toBe(2)
      })

    })
    describe('#removeEdge', () => {
      test('should remove and edge between friends', () => {
        const graph = new Graph
        graph.adjacencyList = {
          'bob': ['mary', 'joe', 'alice'],
          'mary': ['bob', 'joe'],
          'joe': ['bob', 'mary'],
          'alice': ['bob']
        }

        graph.removeEdge('bob', 'mary')
        // Bob and Mary are no longer friends
        console.log('graph.adjacencyList', graph.adjacencyList)
        expect(graph.adjacencyList).toStrictEqual({
          'bob': ['joe', 'alice'],
          'mary': ['joe'],
          'joe': ['bob', 'mary'],
          'alice': ['bob']
        })
      })
    })

    describe('#removeVertex', () => {

    })

  })

})

