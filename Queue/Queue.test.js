const Queue = require('./Queue');

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
      })
      test('should add data to a list containing just one item', () => {

      })
      test('should add data to a very large list', () => {

      })

    });
    describe('#dequeue', () => {

    });
    describe('#peek', () => {

    });
  });
});
