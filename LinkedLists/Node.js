class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }

  getNextNode() {
    return this.next;
  }

  setNextNode(node) {
    if (node instanceof Node || node === null) this.next = node;
    else throw new Error('Unable to use method setNextNode because the input is not a node or is not null');
  }

}

module.exports = Node;
