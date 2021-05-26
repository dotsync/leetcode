/* eslint-disable max-len */
const BinaryTreeNode = require('../../Binary Tree/BinaryTreeNode');
const BinaryTree = require('../../Binary Tree/BinaryTree');
const rowAverage = require('./rowAverage');

describe('Breadth First Search Problems', () => {
  describe('rowAverage', () => {
    test('should return empty array if given empty list', () => {
      const bt = new BinaryTree;
      expect(rowAverage(bt.root)).toStrictEqual([]);
    });
    test('should calvulate the average of each row and retun them in an array', () => {
      const root = new BinaryTreeNode(12);
      root.left = new BinaryTreeNode(7);
      root.right = new BinaryTreeNode(1);
      root.left.left = new BinaryTreeNode(9);
      root.left.right = new BinaryTreeNode(2);
      root.right.left = new BinaryTreeNode(10);
      root.right.right = new BinaryTreeNode(5);
      expect(rowAverage(root)).toStrictEqual([12, 4, 6.5]);
    });
  });
});

