/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
const MovingAverageFromDataStream = require('./MovingAverageFromDataStream');
const Queue = require('./Queue');
const LinkedList = require('../LinkedLists/SinglyLinkedList/SinglyLinkedList');

describe('Queue', () => {
  test('should instantiate an empty linked list for queue storage', () => {
    const queue = new Queue;
    expect(queue.queue.head).toBeNull();
    expect(queue.size).toBe(0);
  });
  describe('Queue Methods', () => {
    describe('#enqueue', () => {
      const queue = new Queue;
      // add one, then two then three
      // head 1 2 3 tail
      test('should add data to an empty list', () => {
        queue.enqueue(1);
        expect(queue.size).toBe(1);
        expect(queue.queue.head.data).toBe(1);
      });
      test('should add data to a list containing just one item', () => {
        queue.enqueue(2);
        expect(queue.size).toBe(2);
        expect(queue.queue.head.data).toBe(1);
        expect(queue.queue.head.next.data).toBe(2);
      });
      test('should add data to a very large list', () => {
        queue.enqueue(3);
        queue.enqueue(4);
        expect(queue.size).toBe(4);
        expect(queue.queue.head.data).toBe(1);
        // tail should be 4 (last out)
        expect(queue.queue.head.next.next.next.data).toBe(4);
      });
    });
    describe('#dequeue', () => {
      const queue = new Queue;
      queue.queue = LinkedList.createListFromValues(1, 2, 3);
      queue.dequeue();
      queue.dequeue();
      expect(queue.queue.head.data).toBe(3);
    });
    describe('#peek', () => {

    });
  });
  describe('movingAverageFromDataStream', () => {
    test('should return the moving Average from a data stream', () => {
      const stream3 = new MovingAverageFromDataStream(3);
      expect(stream3.next(1)).toBe(1);
      expect(stream3.next(10)).toBe(5.5);
      expect(stream3.next(3)).toBe(4.666666666666667);
      expect(stream3.next(5)).toBe(6.0);
    });
    test('should return the movingAverage Sum to be 1', () => {
      const stream3 = new MovingAverageFromDataStream(3);
      expect(stream3.next(1)).toBe(1);
      expect(stream3.next(1)).toBe(1);
      expect(stream3.next(1)).toBe(1);
      expect(stream3.next(1)).toBe(1);
      const stream2 = new MovingAverageFromDataStream(2);
      expect(stream2.next(1)).toBe(1);
      expect(stream2.next(1)).toBe(1);
      expect(stream2.next(1)).toBe(1);
    });
  });
});
