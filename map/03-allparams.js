// map

const nums = [1, 2, 3, 4, 5];

const result = nums.map((num, i, arr) => {
  return `${num} is at index: ${i} and inside of array ${arr}`;
});

console.log(`result`, result);
