const copyListWithRandomPointer = (head) => {
  const map = new Map();

  /**
   * @param {Node} node Current node to copy
   * @return {Node} copied version of Node
   */
  function copy(node) {
    if (!node) return null;
    if (map.get(node)) return map.get(node);

    const n = {data: node.data};
    map.set(node, n);

    n.next = copy(node.next);
    n.random = copy(node.random);
    return n;
  }

  return copy(head);
};

module.exports = copyListWithRandomPointer;
