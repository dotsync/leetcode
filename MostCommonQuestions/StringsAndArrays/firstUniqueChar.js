const firstUniqueChar = (string) => {
  // create hashmap
  const uniques = {};
  for (const char in string) {
    // if we haven't seen letter before, put it in hash with count
    if (!uniques[string[char]]) {
      uniques[string[char]] = 1;
    } else {
      // else we have seen letter before, increase count
      uniques[string[char]] ++;
    }
  }
  // iterate string a second time
  for (const char in string) {
    // compare current character in string to hash
    if (uniques[string[char]] == 1) {
      return Number(char);
    }
  };
  // If nothing returned from the above loop, nothing was found
  return -1;
};

module.exports = firstUniqueChar;
