const noRepeatSubstring = (string) => {
  let left = 0, maxLength = 0, characters = {};
  for (let right = 0; right < string.length; right ++) {
    // if current char is in hash
    if (string[right] in characters) {
      // move left
      left = Math.max(left, characters[string[right]] +1)
    }
    // set new char into hash = index of char
    characters[string[right]] = right;
    maxLength = Math.max(maxLength, right - left + 1)
  }
  return maxLength;
}

module.exports = noRepeatSubstring;
