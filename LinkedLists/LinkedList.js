const Node = require('./Node');

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // find
  // addAtHead
  addAtHead(data) {
    const oldHead = this.head
    // check if there is a head
    if (oldHead !== null) {
      // yes, rearange poiinters
      this.head = new Node(data)
      this.head.setNextNode(oldHead)
    } else { // else head = created head
      this.head = new Node(data);
    }
    this.length++;
  }
  // addAtTail
  // addAtIndex
  // deleteAtIndex
  // print

}

module.exports = LinkedList;
