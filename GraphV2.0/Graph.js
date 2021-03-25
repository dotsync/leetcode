const Vertex = require('./Vertex');

class Graph {
  constructor(isDirected = false, isWeighted = false) {
    this.vertices = [];
    this.isDirected = isDirected;
    this.isWeighted = isWeighted;
  }
  addVertex(data) {
    const newVertex = new Vertex(data);
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
  removeEdge(vertexOne, vertexTwo) {
    if (vertexOne instanceof Vertex && vertexTwo instanceof Vertex) {
      vertexOne.removeEdge(vertexTwo);
      if (!this.isDirected) vertexTwo.removeEdge(vertexOne);
    } else {
      throw new Error('Expected Vertex arguments')
    }
  }
  getVertexByValue(value) {
    return this.vertices.find(v => v.data === value)
  }
  print() {
    const vertexList = this.vertices;
    vertexList.forEach(vertex => vertex.print());
  }

  depthFirstTraversal(start, callback, visitedVertices = [start]) {
    callback(start)
    start.edges.forEach(edge => {
      const neighbor = edge.end;
      if (!visitedVertices.includes(neighbor)) {
        visitedVertices.push(neighbor);
        depthFirstTraversal(neighbor, callback, visitedVertices);
      }
    });
  };
}

module.exports = Graph
