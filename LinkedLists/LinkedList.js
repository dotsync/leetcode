const Node = require('./Node');

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // findSpecficData
  findSpecficData(data) {
    // iterate list
    let currentNode = this.head
    let counter = 0;
    while (counter < this.length) {
      // check if current node.data === data
      if (currentNode.data === data) {
        // return the node
        return counter
      }
      // update current to be curr.next
      currentNode = currentNode.getNextNode();
      // counter ++
      counter++;
    }
    // not found
    return -1
  }

  // findSpecificIndex
  findSpecificIndex(index) {
    if (index <= -1 || index >= this.length) return null;
    let currentNode = this.head;
    if (index === 0) return currentNode.data
    let counter = 0;
    while (counter < index) {
      currentNode = currentNode.getNextNode();
      counter++;
    }
    return currentNode.data
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
  addAtTail(data) {
    if (this.length === 0) this.addAtHead(data);
  }
  // addAtIndex
  // deleteAtIndex
  // printList

}

LinkedList.createListFromValues = function (...values) {
  const linkedList = new LinkedList();
  for (let i = values.length - 1; i >= 0; i--) {
    linkedList.addAtHead(values[i]);
  }
  return linkedList;
}

module.exports = LinkedList;
