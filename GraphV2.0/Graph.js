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
  addEdge(vertexOne, vertexTwo, weight) {
    const edgeWeight = this.isWeighted ? weight : null

    if (vertexOne instanceof Vertex && vertexTwo instanceof Vertex) {
      vertexOne.addEdge(vertexTwo, edgeWeight);
      if (!this.isDirected) vertexTwo.addEdge(vertexOne, edgeWeight);
    } else {
      throw new Error('Ex[ected Vertex arguments');
    }
  }
  removeEdge() {

  }
  getVertexByValue() {

  }
  print() {

  }
}
