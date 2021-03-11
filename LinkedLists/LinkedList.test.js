const LinkedList = require('./LinkedList');

describe('Linked List', () => {
  test('should have 0 length and this.head should === null in an empty list', () => {
    const list = new LinkedList;
    expect(list.length).toBe(0);
    expect(list.head).toBeNull();
  })

  describe('#addAtHead', () => {
    // add first item to list at head
    test('should add data to begining of list when list is empty', () => {
      const list = new LinkedList;
      list.addAtHead('first in')
      expect(list.head.data).toBe('first in');
    })
    // add two more items to list at head
    test('should have the most recently added item at the head and a length of 3', () => {
      const list = new LinkedList;
      list.addAtHead('first in')
      list.addAtHead('second in')
      const oldHead = list.head;
      list.addAtHead('third in')
      expect(list.head.data).toBe('third in');
      expect(list.length).toBe(3);
      expect(list.head.next).toBe(oldHead);
    })
  })
  describe('#getByIndex', () => {
    describe('with index less than 0', () => {
      test('should return null', () => {
        const list = LinkedList.createListFromValues(10, 20, 30, 40)
        expect(list.findSpecificIndex(-1)).toBeNull();
      })
    })
  })
})
