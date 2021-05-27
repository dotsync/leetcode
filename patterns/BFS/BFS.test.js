/* eslint-disable max-len */
const BinaryTreeNode = require('../../Binary Tree/BinaryTreeNode');
const BinaryTree = require('../../Binary Tree/BinaryTree');
const rowAverage = require('./rowAverage');
const minDepth = require('./minDepth');

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
  describe('minDepth', () => {
    test('should return 0 for empty tree', () => {
      const root = null;
      expect(minDepth(root)).toBe(0);
    });
    test('should return the minimum depth in a small tree', () => {
      const orphan = new BinaryTreeNode(1);
      expect(minDepth(orphan)).toBe(1);
      const root1 = new BinaryTreeNode(1);
      root1.left = new BinaryTreeNode(2);
      expect(minDepth(root1)).toBe(2);
      const root2 = new BinaryTreeNode(1);
      root2.left = new BinaryTreeNode(2);
      root2.right = new BinaryTreeNode(3);
      expect(minDepth(root2)).toBe(2);
    });
    test('should return minimum depth in large trees', () => {
      const root1 = new BinaryTreeNode(1);
      root1.left = new BinaryTreeNode(2);
      root1.right = new BinaryTreeNode(3);
      root1.left.left = new BinaryTreeNode(4);
      root1.left.right = new BinaryTreeNode(5);
      expect(minDepth(root1)).toBe(2);
    });
  });
});

