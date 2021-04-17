const binaryTreeDepth = (root) => {
  // code here
  if (root == null) return 0;
  return Math.max(binaryTreeDepth(root.left), binaryTreeDepth(root.right)) + 1;
};

module.exports = binaryTreeDepth;
