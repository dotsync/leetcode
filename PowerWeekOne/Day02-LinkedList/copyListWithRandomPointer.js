const copyListWithRandomPointer = (head) => {
  const map = new Map();

  /**
   * @param {Node} node Current node to copy
   * @return {Node} copied version of Node
   */
  function copy(node) {
    if (!node) return null;
    // If exists in map we dont need to build
    if (map.get(node)) return map.get(node);
    // create clone and insert into map
    const clone = {data: node.data};
    map.set(node, clone);

    // copy clones properties recursivly
    clone.next = copy(node.next);
    clone.random = copy(node.random);
    return clone;
  }
  return copy(head);
};

module.exports = copyListWithRandomPointer;
