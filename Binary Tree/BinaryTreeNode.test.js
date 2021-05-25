const BinaryTreeNode = require('./BinaryTreeNode');

describe('BinaryTreeNode class', () => {
  test('should have a left and right property', () => {
    const node = new BinaryTreeNode(9);
    expect(node.left).toBeNull();
    expect(node.right).toBeNull();
    expect(node.data).toBe(9);
  });
});
