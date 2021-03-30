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

  })
  // describe('reverseNodesInKGroups', () => {

  // })
})
