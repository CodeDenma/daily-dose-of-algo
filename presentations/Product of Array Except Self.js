
// O(n) Time | O(n) Space
function sumOfArrayExceptSelf1(nums) {
  const leftSums = new Array(nums.length).fill(0);

  for (let i = 1; i < nums.length; i++) {
    leftSums[i] = leftSums[i - 1] + nums[i - 1];
  }

  console.log(leftSums);

  const rightSums = new Array(nums.length).fill(0);

  for (let i = nums.length - 2; i >= 0; i--) {
    rightSums[i] = rightSums[i + 1] + nums[i + 1];
  }

  console.log(rightSums);

  const output = new Array(nums.length).fill(0);

  for (let i = 0; i < output.length; i++) {
    output[i] = leftSums[i] + rightSums[i];
  }

  return output;
}

console.log(sumOfArrayExceptSelf1([1, 2, 3, 4])); // [9, 8, 7, 6]


// O(n) Time | O(1) Space
function sumOfArrayExceptSelf2(nums) {
  let leftRunningSum = 0;
  const output = new Array(nums.length).fill(0);

  for (let i = 0; i < nums.length; i++) {
    output[i] += leftRunningSum;
    leftRunningSum += nums[i];
  }

  console.log(output);

  let rightRunningSum = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] += rightRunningSum;
    rightRunningSum += nums[i];
  }

  return output;
}


console.log(sumOfArrayExceptSelf2([1, 2, 3, 4])); // [9, 8, 7, 6]


