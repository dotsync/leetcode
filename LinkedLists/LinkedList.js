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
  printList(fullSkeleton, returnTestString) {
    if (fullSkeleton) return console.log(util.inspect(this.head, false, null, true))
    let output = 'HEAD->'
    let currentNode = this.head
    while (currentNode.next !== null) {
      output += `${currentNode.data}, `
      currentNode = currentNode.next
    }
    if (returnTestString) return `${output}`;
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
  Return true if there is a cycle in the linked list. Otherwise, return false.
  */
  hasCycle() {
    let p1 = this.head;
    if (p1 === null) return false
    let p2 = this.head.next;
    while (p2 !== null) {
      if (p2.next === null) return false
      if (p1 === p2) return true;
      p1 = p1.next
      p2 = p2.next.next
    }
    return false;
  }

  /* (CTCI 2.2) Return Kth to last element */
  kthToLastWithLength(k) {
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
  kthToLastNoLength(k, head) {
    let p1 = head;
    let p2 = head;
    for (let i = 0; i < k; i++) {
      if (p1 == null) return null;
      p1 = p1.next;
    }
    while (p1 !== null) {
      p1 = p1.next
      p2 = p2.next
    }
    if (p2 === null) return null
    else return p2.data
  }
  /* (leetcode 21) Merge 2 sorted linked lists*/
  mergeTwoSortedLists(list1, list2) {
    // modify and return list2
    // create pointers to each lists head
    // p2 is longer one
    // while (p2 !== null)
    // if p1 is greater than p2
    // p2 is the head



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
