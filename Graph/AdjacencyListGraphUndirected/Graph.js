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
  addEdge() {
  }
  removeEdge() {
  }
  removeVertex() {
  }
}

const graph = new Graph
graph.addVertex('hello')
console.log(graph.adjacencyList)
graph.addVertex('hello')


module.exports = Graph;
