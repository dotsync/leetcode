// recursive approach
// const fib = (n) => {
//   if (n <= 1) return n;
//   return fib(n - 1) + fib(n - 2);
// };

// dp approach memoization - bottom up
const fib = (n) => {
  const map = {
    0: 0,
    1: 1,
    2: 1,
  };
  for (let i = 3; i <= n; i++) {
    map[i] = map[i - 1] + map[i - 2];
  }
  return map[n];
};

module.exports = fib;
