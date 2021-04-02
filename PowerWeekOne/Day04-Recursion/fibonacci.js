/**
 * @param {Int} n
 * @param {Array} cache
 * @return {Int}
 */
const fib = function(n) {
  if (n <= 1) return n;
  return fib(n-1) + fib(n-2);
};

module.exports = fib;
