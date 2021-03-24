const Vertex = require('./Vertex');

class Graph {
  constructor(isDirected = false, isWeighted = false) {
    this.vertices = [];
    this.isDirected = isDirected;
    this.isWeighted = isWeighted;
  }
  addVertex(data) {
    const newVertex = newVertex(data);
    this.vertices.push(newVertex);
    return newVertex;
  }
  removeVertex(vertex) {
    this.vertices = this.vertices.filter(v => v !== vertex)
  }
  addEdge() {

  }
  removeEdge() {

  }
  getVertexByValue() {

  }
  print() {

  }
}
