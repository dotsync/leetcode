const Node = require('./Node');
const util = require('util')

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
    if (index === 0) return currentNode
    let counter = 0;
    while (counter < index) {
      currentNode = currentNode.getNextNode();
      counter++;
    }
    return currentNode
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
    if (this.length === 0) return this.addAtHead(data);
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = new Node(data);
    this.length++;
  }
  // addAtIndex
  addAtIndex(index, data) {
    if (index <= 0) {
      this.addAtHead(data)
      return 0
    }
    if (index >= this.length - 1) {
      this.addAtTail(data)
      return this.length - 1
    }
    const prev = this.findSpecificIndex(index - 1)
    const next = prev.getNextNode()
    prev.setNextNode(new Node(data));
    prev.next.setNextNode(next)
    this.length++;
    return index;
  }
  // printList
  printList(fullSkeleton) {
    if (fullSkeleton) return console.log(util.inspect(this.head, false, null, true))
    let output = 'HEAD->'
    let currentNode = this.head
    while (currentNode.next !== null) {
      output += `${currentNode.data} ~~ `
      currentNode = currentNode.next
    }
    console.log(`------- Printing List -------

    ${output}<-TAIL

    ------- Print Complete -------`)
  }
  removeDupes() {
    // 2.1 remove all duplicates from the linked list
    if (this.length <= 1) return this.list;
    let currentNode = this.head;
    let alreadySeen = {};
    // add first element so checker can check in front
    alreadySeen[currentNode.data] = true
    while (currentNode.next !== null) {
      // if not seen
      if (alreadySeen[currentNode.next.data]) {
        // else is seen so delete current
        // grab previous
        let next = currentNode.next.next;
        console.log('next', next)
        currentNode.setNextNode(next);
        currentNode = next;
      } else {
        // add to hash
        alreadySeen[currentNode.next.data] = true;
        currentNode = currentNode.getNextNode();
      }
    }
    console.log(alreadySeen)
    this.printList(true)
  }
}

LinkedList.createListFromValues = function (...values) {
  const linkedList = new LinkedList();
  for (let i = values.length - 1; i >= 0; i--) {
    linkedList.addAtHead(values[i]);
  }
  return linkedList;
}

module.exports = LinkedList;
