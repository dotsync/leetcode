const Queue = require('./Queue');

describe('Queue', () => {
  test('should instantiate an empty linked list for queue storage', () => {
    const queue = new Queue;
    expect(queue.queue.head).toBeNull();
    expect(queue.size).toBe(0);
  });
});
