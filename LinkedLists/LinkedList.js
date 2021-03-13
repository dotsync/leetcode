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
    console.log(`${output}<-TAIL`)
  }
  // (CTCI 2.1) remove all duplicates from the linked list
  removeDupes() {
    const alreadySeen = {};
    let prev = null;
    let currentNode = this.head
    while (currentNode !== null) {
      if (alreadySeen[currentNode.data]) {
        prev.next = currentNode.next;
        this.length--;
      } else {
        alreadySeen[currentNode.data] = true;
        prev = currentNode;
      }
      currentNode = currentNode.next;
    }
    return this.head;
  }
  /* (leetcode 206) Reverse Linked List
  Given the head of a singly linked list, reverse the list, and return the reversed list. */
  reverse(head) {
    let previousNode = null;
    let currentNode = head;
    while (currentNode !== null) {
      let nextTemp = currentNode.next;
      currentNode.next = previousNode;
      previousNode = currentNode;
      currentNode = nextTemp;
    }
    return previousNode
  }
  /* (leetcode 141)
  Given head, the head of a linked list, determine if the linked list has a cycle in it.

  There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

  Return true if there is a cycle in the linked list. Otherwise, return false.
  */

  /* (CTCI 2.2) Return Kth to last element */
  kthToLast(k) {
    let currentNode = this.head;
    // cut off extra k length to return first or last node
    if (k > this.length) k = this.length;
    if (k <= 0) k = 1;
    let distanceFromHead = this.length - k - 1;
    while (distanceFromHead >= 0 && currentNode.next !== null) {
      currentNode = currentNode.next;
      distanceFromHead--;
    }
    return currentNode.data
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
