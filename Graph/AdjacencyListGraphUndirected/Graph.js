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
    // iterate vertex1 array and look for vertex 2, if it doesn;t exist add it,
    for (let i = 0; i < this.adjacencyList[vertex1]; i++) {
      if (this.adjacencyList[vertex1[i]] === vertex2) break
    }
    this.adjacencyList[vertex1].push(vertex2)
    // interate vertex2 and look for vertex1
    for (let i = 0; i < this.adjacencyList[vertex2]; i++) {
      if (this.adjacencyList[vertex2[i]] === vertex1) break
    }
    this.adjacencyList[vertex2].push(vertex1)
  }
  removeEdge() {
  }
  removeVertex() {
  }
}

module.exports = Graph;
