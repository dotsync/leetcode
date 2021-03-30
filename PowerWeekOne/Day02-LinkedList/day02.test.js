const SinglyLinkedList = require('../../LinkedLists/SinglyLinkedList/SinglyLinkedList');
const copyListWithRandomPointer = require('./copyListWithRandomPointer');
const reverseLinkedList = require('./reverseLinkedList');

describe('Day02 LinkedList List Section', () => {
  describe('copyListWithRandomPointer', () => {

  })
  describe('addingTwoNumbers', () => {

  })
  // describe('mergeKSortedLists', () => {

  // })
  describe('mergeTwoSortedLists', () => {

  })
  describe('reverseLinkedList', () => {
    test('should work with an empty list', () => {
      const ll = new SinglyLinkedList
      expect(reverseLinkedList(ll.head)).toBeNull();
    })
    test('should reverse the given list', () => {
      const input = SinglyLinkedList.createListFromValues(5, 4, 3, 2, 1)
      const expected = SinglyLinkedList.createListFromValues(1, 2, 3, 4, 5)
      expect(reverseLinkedList(input.head)).toStrictEqual(expected.head)
    })
  })
  // describe('reverseNodesInKGroups', () => {

  // })
})
