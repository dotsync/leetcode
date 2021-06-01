const hasPathSum = require('./hasPathSum');
const hasPathSumList = require('./hasPathSumList');
const sumOfPaths = require('./sumOfPaths');
/**
 * Simple Tree Node for testing
 */
class TreeNode {
  /**
   * @param {Number} val Value for TreeNode
   */
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

describe('Depth First Search (DFS) problems', () => {
  const binaryRoot = new TreeNode(1);
  binaryRoot.left = new TreeNode(2);
  binaryRoot.right = new TreeNode(3);
  binaryRoot.left.left = new TreeNode(4);
  binaryRoot.left.right = new TreeNode(5);
  binaryRoot.right.left = new TreeNode(6);
  binaryRoot.right.right = new TreeNode(7);
  describe('hasPathSum', () => {
    test('should return false b/c no path that reachs total sum', () => {
      expect(hasPathSum(binaryRoot, 100)).toBe(false);
      expect(hasPathSum(binaryRoot, 1)).toBe(false);
      expect(hasPathSum(binaryRoot, 2)).toBe(false);
      expect(hasPathSum(binaryRoot, 3)).toBe(false);
      expect(hasPathSum(binaryRoot, 5)).toBe(false);
    });
    test('should return true b/c is a path that reachs total sum', () => {
      expect(hasPathSum(binaryRoot, 10)).toBe(true);
      expect(hasPathSum(binaryRoot, 7)).toBe(true);
      expect(hasPathSum(binaryRoot, 11)).toBe(true);
    });
  });
  describe('hasPathSumList', () => {
    test('should return the sublists of the node values that add to k', () => {
      const expected = [[1, 3, 6]];
      expect(hasPathSumList(binaryRoot, 10)).toStrictEqual(expected);
    });
  });
  describe('sumOfPaths', () => {
    test('should return 0 if given empty tree', () => {
      expect(sumOfPaths(null)).toBe(0);
    });
    test('should return value of left path if it is the only path', () => {
      const node = new TreeNode(4);
      expect(sumOfPaths(node)).toBe(4);
      node.left = new TreeNode(1);
      expect(sumOfPaths(node)).toBe(41);
    });
    test('should combine numbers in a path not add them', () => {
      const node = new TreeNode(5);
      expect(sumOfPaths(node)).toBe(5);
      node.right = new TreeNode(1);
      expect(sumOfPaths(node)).toBe(51);
    });
    test('should return value of all paths in unbalanced tree', () => {
      const node = new TreeNode(5);
      expect(sumOfPaths(node)).toBe(5);
      node.right = new TreeNode(1);
      node.left = new TreeNode(9);
      node.right.right = new TreeNode(1);
      expect(sumOfPaths(node)).toBe(570);
    });
    test('should return the sum of all the paths perfect balanced tree', () => {
      expect(sumOfPaths(binaryRoot)).toBe(522);
    });
  });
});
