/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
// [1, 1, 2, 2, 3] -> [1, 2, 3]
const removeDuplicates = (arr) => {
  if (arr.length < 2) return arr;
  // create pointers
  let j = 1;
  // iterate i across the entire arr
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[j - 1]) {
      arr[j] = arr[i];
      j++;
    }
  }
  return j;
};
/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */
// const removeDuplicates = (arr) => {
//   let replacer = 1;
//   for (let checker = 0; checker < arr.length; checker ++) {
//     if (arr[replacer - 1] !== arr[checker]) {
//       arr[replacer] = arr[checker];
//       replacer ++;
//     }
//   }
//   return replacer;
// };

// time: O(n)
// space: O(1)

module.exports = removeDuplicates;
