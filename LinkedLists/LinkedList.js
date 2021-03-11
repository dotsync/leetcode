const Node = require('./Node');

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // findNodeInList
  findNodeInList(data) {
    // iterate list
    let currentNode = this.head
    let counter = 0;
    while (counter <= this.length) {
      // check if current node.data === data
      if (currentNode.data === data) {
        // return the node
        currentNode.data === data
      }
      // update current to be curr.next
      currentNode = currentNode.getNextNode();
      // counter ++
      counter++;
    }
    // not found
    return -1
  }

  // addAtHead
  addAtHead(data) {
    const newHead = new Node(data);
    const oldHead = this.head;
    // check if there is a head
    if (this.head === null) {
      this.head = newHead
    } else {
      this.head = newHead
      this.head.setNextNode(oldHead);
    }
    this.length++;
  }
  // addAtTail
  // addAtIndex
  // deleteAtIndex
  // print

}

module.exports = LinkedList;
