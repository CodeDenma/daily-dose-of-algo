
// O(n) Time | O(n) Space
var twoSum = function (nums, target) {
  const numToIdx = {}; // { number: index }

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const diff = target - num;

    if (diff in numToIdx) {
      const diffIdx = numToIdx[diff];

      return [diffIdx, i];
    }

    // insert the current num and its index into numToIdx
    numToIdx[num] = i;
  }

  return [-1, -1];
};


// O(nlog(n)) Time | O(1) Space
function twoSumBoolean(nums, target) {
  // sort the numbers in ascending order
  nums.sort((a, b) => a - b);

  // two pointer: left for the smaller value, right for the larger value
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const leftVal = nums[left];
    const rightVal = nums[right];

    const currentSum = leftVal + rightVal;

    if (currentSum === target) {
      return true;
    } else if (currentSum < target) {
      // since the currentSum is smaller than the target, we need to add up bigger numbers => move the left pointer so next leftVal is bigger
      left++;
    } else {
      // since the currentSum is larger than the target, we need to add up smaller numbers => move the right pointer so next rightVal is smaller
      right--;
    }
  }

  return false;
}

// console.log(twoSumBoolean([2, 7, 11, 15], 9)); // true
// console.log(twoSumBoolean([2, 7, 11, 15], 420)); // false
// console.log(twoSumBoolean([3, 2, 4], 6)); // true
// console.log(twoSumBoolean([3, 3], 6)); // true
// console.log(twoSumBoolean([3, 3], 20)); // false