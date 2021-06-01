/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
const sumOfPaths = (root) => {
  return collectPath(root, 0);
};

function collectPath(currentNode, pathTotal) {
  if (currentNode === null) return 0;
  pathTotal = (10 * pathTotal) + currentNode.val;

  if (currentNode.left === null && currentNode.right === null) {
    return pathTotal;
  }
  return (
    collectPath(currentNode.left, pathTotal) +
    collectPath(currentNode.right, pathTotal)
  );
}

module.exports = sumOfPaths;


/** kept getting NAN for my out put for the longest time, I printed my currentnode.value and this showed me that my currentNode.value was undefined. THe proeprty name was actually val */
