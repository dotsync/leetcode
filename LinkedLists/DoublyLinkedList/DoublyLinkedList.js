const LinkedListNode = require('../LinkedListNode')

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // methods
  // #addToHead
  addToHead(data) {
    const newHead = new LinkedListNode(data)
    const currentHead = this.head;
    if (currentHead !== null) {
      currentHead.setPreviousNode(newHead);
      newHead.setNextNode(currentHead);
    }
    this.head = newHead;
    this.length++;
    if (this.tail === null) this.tail = newHead
  }
  // #addToTail
  addToTail(data) {
    const newTail = new LinkedListNode(data);
    const currentTail = this.tail;
    if (currentTail) {
      currentTail.setNextNode(newTail);
      newTail.setPreviousNode(currentTail);
    }
    this.tail = newTail;
    this.length++;
    if (!this.head) this.head = newTail
  }
  // #addAtIndex
  // #printList
  printList() {
    let currentNode = this.head;
    let output = '<head> ';
    while (currentNode !== null) {
      output += currentNode.data + ' ';
      currentNode = currentNode.getNextNode();
    }
    output += '<tail>';
    console.log(output);
  }
  // #findSpecificIndex
  // #findSpecificData
}

DoublyLinkedList.createListFromValues = function (...values) {
  const doublyLinkedList = new DoublyLinkedList();
  for (let i = values.length - 1; i >= 0; i--) {
    doublyLinkedList.addToHead(values[i]);
  }
  return doublyLinkedList;
}



module.exports = DoublyLinkedList;
