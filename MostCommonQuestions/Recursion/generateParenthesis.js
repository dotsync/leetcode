/* eslint-disable max-len */
const generateParenthesis = (n) => {
  const combinations = [];
  generateString(combinations, '', 0, 0, n);
  return combinations;

  /**
   * @param {array} result An array to push final string to
   * @param {string} currentString the current valid parenthesis being generated
   * @param {int} openCounter counts open parenthesis
   * @param {int} closeCounter counts open parenthesis
   * @param {int} max max amount of each left and right
   */
  function generateString(result, currentString, openCounter, closeCounter, max) {
    // If string is finished, push to result
    if (currentString.length === max * 2) {
      result.push(currentString);
      return;
    }
    // generate left is possible this time
    if (openCounter < max) generateString(result, currentString + '(', openCounter + 1, closeCounter, max);
    // generate right if possile this time
    if (closeCounter < openCounter) generateString(result, currentString + ')', openCounter, closeCounter + 1, max);
  }
};

module.exports = generateParenthesis;

// time and space is O(4^n / sqrt(n))
