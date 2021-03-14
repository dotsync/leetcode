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
    const newHead = new Node(data)
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
