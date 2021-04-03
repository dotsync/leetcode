/* eslint-disable require-jsdoc */
const fib = (n) => {
  const map = new Map();
  map.set(0, 0);
  map.set(1, 1);

  function memo(n) {
    if (map.get(n) !== undefined) {
      return map.get(n);
    } else {
      // setting the computation
      map.set(n, fib(n-1) + fib(n-2));
      // return computation for fib
      return map.get(n);
    }
  }
  return memo(n);
};

module.exports = fib;
