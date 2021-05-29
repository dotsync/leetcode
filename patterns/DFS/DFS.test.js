const hasPathSum = require('./hasPathSum');
const hasPathSumList = require('./hasPathSumList');
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
});

