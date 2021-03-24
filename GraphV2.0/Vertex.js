const Edge = require('./Edge')

class Vertex {
  constructor(data) {
    this.data = data;
    this.edges = [];
  }
  addEdge(vertex, weight) {
    if (vertex instanceof Vertex) {
      this.edges.push(new Edge(this, vertex, weight))
    } else {
      throw new Error('Edge start and end my both be instance of Vertex class')
    }
  }
  removeEdge(vertex) {
    this.edges = this.edges.filter(e => e.end !== vertex)
  }
}
