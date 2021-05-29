/* eslint-disable require-jsdoc */
module.exports = hasPathSumList = (root, sum) => {
  const result = [];
  traverse(root, sum, []);
  function traverse(node, target, sublist) {
    if (node === null) return;
    sublist.push(node.value);
    if (node.value === target && node.left === null && node.right === null) {
      result.push(sublist);
    }
    return traverse(node.left, target - node.value, sublist) ||
  traverse(node.right, target - node.value, sublist);
  }
};
