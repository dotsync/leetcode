const Node = require('./Node')

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // methods
  // #addToHead
  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head
    if (currentHead === null) {
      this.head = newHead
      this.head.setNextNode(this.tail)
      this.length++
    } else { // there is already a head
      const oldHead = currentHead
      this.head = newHead
      this.head.setNextNode(oldHead)
      oldHead.setPreviousNode(this.head)
      this.length++
    }
  }
  // #addToTail
  // #addAtIndex
  // #findSpecificIndex
  // #findSpecificData
  // #printList
}



module.exports = DoublyLinkedList;
