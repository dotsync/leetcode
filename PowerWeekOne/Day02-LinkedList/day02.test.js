const SinglyLinkedList = require('../../LinkedLists/SinglyLinkedList/SinglyLinkedList');
const copyListWithRandomPointer = require('./copyListWithRandomPointer');
const reverseLinkedList = require('./reverseLinkedList');
const mergeTwoSortedLists = require('mergeTwoSortedLists');

describe('Day02 LinkedList List Section', () => {
  /********************/
  // Easy Problems
  /********************/
  describe('mergeTwoSortedLists', () => {
    test('should merge when list 1 is empty and 2 is full', () => {

    })
    test('should merge when list 2 is empty and 1 is full', () => {

    })
    test('should merge the two sorted lists', () => {
      const list1 = SinglyLinkedList.createListFromValues(1, 4, 6);
      const list2 = SinglyLinkedList.createListFromValues(2, 3, 5);
      const expected = SinglyLinkedList.createListFromValues(1, 2, 3, 4, 5, 6);
      expect(mergeTwoSortedLists(list1, list2)).toStrictEqual(expected);
    })
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
  /********************/
  // Medium Problems
  /********************/
  describe('copyListWithRandomPointer', () => {

  })
  describe('addingTwoNumbers', () => {

  })
  /********************/
  // Hard Problems
  /********************/
  // describe('reverseNodesInKGroups', () => {

  // })
  // describe('mergeKSortedLists', () => {

  // })
})
