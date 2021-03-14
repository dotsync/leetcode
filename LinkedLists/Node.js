class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }

  getNextNode() {
    return this.next;
  }
  getPreviousNode() {
    return this.prev;
  }
  setNextNode(node) {
    if (node instanceof Node || node === null) this.next = node;
    else throw new Error('Unable to use method setNextNode because the input is not a node instance or the node is not null');
  }
  setPreviousNode(node) {
    if (node instanceof Node || node === null) this.prev = node;
    else throw new Error('Unable to use method setPreviousNoce because the input is not a node instance or the node is not null')
  }

}

module.exports = Node;
