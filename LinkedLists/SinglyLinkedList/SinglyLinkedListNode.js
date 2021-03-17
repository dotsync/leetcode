class SinglyLinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
  getNextNode() {
    return this.next;
  }
  setNextNode(node) {
    if (node instanceof DoublyLinkedListNode || node === null) this.next = node;
    else throw new Error('Unable to use method setNextNode because the input is not a node instance or the node is not null');
  }
}

module.exports = SinglyLinkedListNode;
