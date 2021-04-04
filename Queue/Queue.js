/* eslint-disable require-jsdoc */
const LinkedList = require('../LinkedLists/SinglyLinkedList/SinglyLinkedList');
/**
 * Linear data structure
 * Flexible size
 * FIFO - first in first out
 */
class Queue {
  constructor() {
    this.queue = new LinkedList;
    this.size = 0;
  }
  enqueue(data) {
    this.queue.addAtTail(data);
    this.size ++;
  }
}

module.exports = Queue;
