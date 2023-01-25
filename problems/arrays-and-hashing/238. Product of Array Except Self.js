/**
 * @param {number[]} nums
 * @return {number[]}
 */

// O(n) Time | O(n) Space
var productExceptSelf = function (nums) {
  const leftProducts = new Array(nums.length).fill(1);

  // pass 1: left to right
  for (let i = 1; i < nums.length; i++) {
    leftProducts[i] = leftProducts[i - 1] * nums[i - 1];
  }

  const rightProducts = new Array(nums.length).fill(1);

  // pass 2: right to left
  for (let i = nums.length - 2; i >= 0; i--) {
    rightProducts[i] = rightProducts[i + 1] * nums[i + 1];
  }

  const output = new Array(nums.length).fill(1);

  for (let i = 0; i < output.length; i++) {
    output[i] = leftProducts[i] * rightProducts[i];
  }

  return output;
};

// O(n) Time | O(1) Space
var productExceptSelf = function (nums) {
  let runningProduct = 1;
  const output = new Array(nums.length).fill(1);

  // pass 1: left to right
  for (let i = 0; i < nums.length; i++) {
    output[i] *= runningProduct;
    runningProduct *= nums[i];
  }

  // reset the running product 
  runningProduct = 1;

  // pass 2: right to left
  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] *= runningProduct;
    runningProduct *= nums[i];
  }

  return output;
};

console.log(productExceptSelf([1, 2, 3, 4])); // [24, 12, 8, 6]