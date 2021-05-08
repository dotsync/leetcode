const fruitsInBaskets = (rowOfTrees) => {
  let maxLength = 0,
    windowStart = 0,
    fruitTrees = {};

  for (let windowEnd = 0; windowEnd < rowOfTrees.length; windowEnd++) {
    // check if current elemnt is in hash
    if (!(rowOfTrees[windowEnd] in fruitTrees)) {
      fruitTrees[rowOfTrees[windowEnd]] = 0;
    }
    fruitTrees[rowOfTrees[windowEnd]] +=1;
    // check if the hash is greater than 2
    while(Object.keys(fruitTrees).length > 2) {
      fruitTrees[rowOfTrees[windowStart]] -= 1
      if (fruitTrees[rowOfTrees[windowStart]] === 0) {
        delete fruitTrees[rowOfTrees[windowStart]]
      }
      windowStart++;
    }
    // calculate our max
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
  }
  return maxLength;
}

module.exports = fruitsInBaskets;
