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
        // graph.addVertex('bob')
        // graph.addVertex('mary')
        // graph.addVertex('joe')
        // graph.addVertex('alice')
        graph.adjacencyList = {
          'bob': [],
          'mary': [],
          'joe': [],
          'alice': []
        }
        /* bob knows mary, mary knows bob
        bob knows joe and alice
        joe knows mary */
        graph.addEdge('bob', 'mary')
        graph.addEdge('bob', 'joe')
        graph.addEdge('bob', 'alice')
        graph.addEdge('joe', 'mary')
        console.log(graph.adjacencyList)
        expect(graph.adjacencyList['bob']).toStrictEqual(['mary', 'joe', 'alice'])
        expect(graph.adjacencyList['bob'].length).toBe(3)
        expect(graph.adjacencyList['joe'].length).toBe(2)
        console.log(graph.adjacencyList)
      })

    })
    describe('#removeEdge', () => {
      // const graph = new Graph
      // graph.addVertex('bob')
      // graph.addVertex('mary')
      // expect(graph.adjacencyList['bob']).toStrictEqual(['mary', 'joe', 'alice'])
      // graph.removeEdge('bob', 'mary')
      // expect(graph.adjacencyList['bob']).toStrictEqual([])
      // expect(graph.adjacencyList['mary']).toStrictEqual([])
    })

    describe('#removeVertex', () => {

    })

  })

})

