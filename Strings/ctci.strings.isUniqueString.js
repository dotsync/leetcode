const isUniqueString = string => {
  // iterate and build hash
  const chars = {};
  for (let i = 0; i < string.length; i++) {
    if (chars[string[i]]) return false;
    else { chars[string[i]] = true; }
  }
  return true;
}

module.exports = isUniqueString;

// console.log(isUniqueString('hello')) // false
// console.log(isUniqueString('help')) // true
