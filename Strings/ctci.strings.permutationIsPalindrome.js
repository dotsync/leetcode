const permutationIsPalindrome = string => {
  const removeSpecials = (lowerCaseString) => {
    const specials = [' ', '!']
    const result = []
    for (let i = 0; i < lowerCaseString.length; i++) {
      if (specials.indexOf(lowerCaseString[i]) === -1)
        result.push(lowerCaseString[i])
    }
    return result.join('');
  };
  let refinedString = removeSpecials(string.toLowerCase())
  //iterate through refined string and build hash
  const letterCounts = {};
  for (let i = 0; i < refinedString.length; i++) {
    // if i doesn't exist create it in hash and set it to one
    if (!letterCounts[refinedString[i]]) letterCounts[refinedString[i]] = 1;
    // else it does exist increase count
    else letterCounts[refinedString[i]]++;
  }
  // search all values and make a list of items whose values are not 0 when modulode by 2
  // if this list is greater than one item than the string cannot be a permutation
  let oddCharsOut = []
  for (let key in letterCounts) {
    if (letterCounts[key] % 2 !== 0) {
      oddCharsOut.push(letterCounts[key])
    }
  }
  if (oddCharsOut.length > 1) return false;
  else return true;
}

module.exports = permutationIsPalindrome;
