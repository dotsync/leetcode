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
    if (!vertex1 || !vertex2) throw new Error('Unable to removeEdge because one or both of the verteces do not exist')
    // remove edge
    this.adjacencyList[vertex1].filter(vertex => { vertex !== vertex2 })
    this.adjacencyList[vertex2].filter(vertex => { vertex !== vertex1 })
  }
  removeVertex() {
  }
}

module.exports = Graph;
