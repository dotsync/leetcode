module.exports = hasPathSum = (root, targetSum) => {
  // end of path
  if (root === null) return false;
  const isLeaf = (root.left === null) && (root.right === null);
  if (isLeaf && targetSum === root.val) return true;
  // subtract root.val from targetSum, to check rest of path for rest of target
  return hasPathSum(root.left, targetSum - root.val) ||
  hasPathSum(root.right, targetSum - root.val);
};
