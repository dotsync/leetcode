/* eslint-disable max-len */
const Deque = require('collections/deque'); //http://www.collectionsjs.com
/* eslint-disable require-jsdoc */
module.exports = hasPathSumList = (root, sum) => {
  return findPathsRecursive(root, sum, [], []);
};


function findPathsRecursive(currentNode, sum, sublist, result) {
  if (currentNode === null) {
    return;
  }
  sublist.push(currentNode.val);
  if (currentNode.val === sum && currentNode.left === null && currentNode.right === null) {
    result.push(sublist.slice());
  } else {
    findPathsRecursive(currentNode.left, sum - currentNode.val, sublist, result);
    findPathsRecursive(currentNode.right, sum - currentNode.val, sublist, result);
  }
  // backtrack
  sublist.pop();
  return result;
}

