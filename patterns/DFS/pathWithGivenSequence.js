/* eslint-disable require-jsdoc */
const findPath = (root, sequence, sequenceIndex) => {
  if (root === null) return sequence.length === 0;
  return traverse(root, sequence, 0);
};

function traverse(currentNode, sequence, sequenceIndex) {
  if (currentNode === null) return false;

  const length = sequence.length;
  if (
    sequenceIndex >= length ||
    currentNode.value !== sequence[sequenceIndex]
  ) {
    return false;
  }

  if (
    currentNode.left === null &&
    currentNode.right === null &&
    sequenceIndex === length - 1
  ) {
    return true;
  }

  return (
    traverse(currentNode.left, sequence, sequenceIndex + 1) ||
    traverse(currentNode.right, sequence, sequenceIndex + 1)
  );
}

module.exports = findPath;
