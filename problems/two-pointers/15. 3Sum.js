/**
 * @param {number[]} nums
 * @return {number[][]}
 */






// Three Pointers
// O(n^2) Time | O(1) Space
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const output = [];
  const target = 0;

  function twoSum(secondIdx, thirdIdx, firstNum) {
    while (secondIdx < thirdIdx) {
      const [secondNum, thirdNum] = [nums[secondIdx], nums[thirdIdx]];
      const currentSum = firstNum + secondNum + thirdNum;

      if (currentSum === target) {
        output.push([firstNum, secondNum, thirdNum]);

        while (secondIdx < nums.length && nums[secondIdx] === secondNum) {
          secondIdx++;
        }
      } else if (currentSum < target) {
        secondIdx++;
      } else {
        thirdIdx--;
      }
    }
  }

  for (let firstIdx = 0; firstIdx < nums.length - 2; firstIdx++) {
    if (firstIdx !== 0 && nums[firstIdx - 1] === nums[firstIdx]) continue;

    const firstNum = nums[firstIdx];

    twoSum(firstIdx + 1, nums.length - 1, firstNum);
  }

  return output;
};

// HashMap
// O(n^2) Time | O(n) Space
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);

  const output = [];
  const target = 0;

  function twoSum(startIdx, firstNum) {
    const numSet = new Set();

    let idx = startIdx;

    while (idx < nums.length) {
      const thirdNum = nums[idx];
      const secondNum = (target - firstNum - thirdNum);

      if (numSet.has(secondNum)) {
        output.push([firstNum, secondNum, thirdNum]);

        while (idx + 1 < nums.length && nums[idx] === nums[idx + 1]) {
          idx++;
        }
      }

      numSet.add(thirdNum);
      idx++;
    }
  }

  for (let firstIdx = 0; firstIdx < nums.length - 2; firstIdx++) {
    if (firstIdx !== 0 && nums[firstIdx - 1] === nums[firstIdx]) continue;

    const firstNum = nums[firstIdx];

    twoSum(firstIdx + 1, firstNum);
  }

  return output;
};