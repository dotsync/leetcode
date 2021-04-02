/**
 * @param {Int} n pairs of parenthesis
 * @return {Array} list of all combinations of well-formed parentheses.
 */
function generateParenthesis(n) {
  const combinations = [];

  if (n == 0) return combinations;
  generateParenthesis(n-1);

  function pair(n, string, ) {

  }
}

module.exports = generateParenthesis;
