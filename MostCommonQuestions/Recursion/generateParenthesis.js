/* eslint-disable max-len */
const generateParenthesis = (n) => {
  const combinations = [];
  generateString(combinations, '', 0, 0, n);
  return combinations;

  /**
   * @param {array} result
   * @param {string} currentString
   * @param {int} openCounter
   * @param {int} closeCounter
   * @param {int} max
   */
  function generateString(result, currentString, openCounter, closeCounter, max) {
    if (currentString.length === max * 2) {
      result.push(currentString);
      return;
    }
    if (openCounter < max) generateString(result, currentString + '(', openCounter + 1, closeCounter, max);
    if (closeCounter < openCounter) generateString(result, currentString + ')', openCounter, closeCounter + 1, max);
  }
};

module.exports = generateParenthesis;
