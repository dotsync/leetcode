class Graph {
  constructor() {
    // will be undirected
    this.adjacencyList = {};
  }
  // methods
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = []
    } else {
      throw new Error('The vertex you are trying to add already exists. Aborting operation.')
    }
  }
  addEdge(vertex1, vertex2) {
    // if vertex doesnt exist, add to list
    if (!this.adjacencyList[vertex1]) this.adjacencyList[vertex1] = []
    if (!this.adjacencyList[vertex2]) this.adjacencyList[vertex2] = []

    this.adjacencyList[vertex1].push(vertex2)
    this.adjacencyList[vertex2].push(vertex1)

  }
  removeEdge(vertex1, vertex2) {
    // find vertex
    // if (!vertex1 || !vertex2) throw new Error('Unable to removeEdge because one or both of the verteces do not exist')
    // remove edge
    if (vertex1) this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2)
    if (vertex2) this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1)
  }
  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) throw new Error('Vertex does not exist in graph')
    while (this.adjacencyList[vertex].length > 0) {
      // remove edges
      let adjacentVertex = this.adjacencyList[vertex].pop()
      this.removeEdge(vertex, adjacentVertex)
    }
    delete this.adjacencyList[vertex]
  }
}

module.exports = Graph;
