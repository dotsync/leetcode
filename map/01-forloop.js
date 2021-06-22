// simple loop

const nums = [1, 2, 3, 4, 5];
const result = new Array(5);

for (let i = 0; i < nums.length; i++) {
  result[i] = nums[i] * 10;
}
console.log(`result`, result);
