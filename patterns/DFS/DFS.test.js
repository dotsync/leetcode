const hasPathSum = require('./hasPathSum');
const hasPathSumList = require('hasPathSumList');
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
  describe('hasPathSum', () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(7);
    test('should return false b/c no path that reachs total sum', () => {
      expect(hasPathSum(root, 100)).toBe(false);
      expect(hasPathSum(root, 1)).toBe(false);
      expect(hasPathSum(root, 2)).toBe(false);
      expect(hasPathSum(root, 3)).toBe(false);
      expect(hasPathSum(root, 5)).toBe(false);
    });
    test('should return true b/c is a path that reachs total sum', () => {
      expect(hasPathSum(root, 10)).toBe(true);
      expect(hasPathSum(root, 7)).toBe(true);
      expect(hasPathSum(root, 11)).toBe(true);
    });
  });
  describe('', () => {

  })

});

