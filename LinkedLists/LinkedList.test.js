const LinkedList = require('./LinkedList');

describe('Linked List', () => {
  describe('#addAtHead', () => {
    test('should be an empty list', () => {
      const list = new LinkedList;
      expect(list.length).toBe(0);
      expect(list.head).toBeNull();
    })
    // add first item to list at head
    test('should add data to begining of list when list is empty', () => {
      const list = new LinkedList;
      list.addAtHead('first in')
      expect(list.head.data).toBe('first in');
    })
    // add two more items to list at head
    test('should have the most recently added item at the head', () => {
      const list = new LinkedList;
      list.addAtHead('first in')
      list.addAtHead('second in')
      list.addAtHead('third in')
      expect(list.head.data).toBe('third in');
    })
    test('should have a length of 3', () => {
      const list = new LinkedList;
      list.addAtHead('first in')
      list.addAtHead('second in')
      list.addAtHead('third in')
      expect(list.length).toBe(3);
    })
  })
  describe('addAtTail', () => {

  })
})
