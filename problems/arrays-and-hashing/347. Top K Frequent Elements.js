/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// sort
// O(nlog(n)) Time | O(n) Space
var topKFrequent = function (nums, k) {
  const counter = {};

  for (const num of nums) {
    counter[num] = (counter[num] ?? 0) + 1;
  }

  nums.sort((a, b) => counter[b] - counter[a]);

  const numSet = new Set();

  for (let i = 0; i < nums.length; i++) {
    numSet.add(nums[i]);

    if (numSet.size === k) {
      return Array.from(numSet);
    }
  }

  return Array.from(numSet);
};

// bucket sort (object)
// O(n) Time | O(n) Space
var topKFrequent = function (nums, k) {
  const numToCount = {};
  for (const num of nums) {
    numToCount[num] = (numToCount[num] ?? 0) + 1;
  }

  const countToNum = {};
  for (const [num, count] of Object.entries(numToCount)) {
    countToNum[count] = (countToNum[count] ?? []).concat(num);
  }

  const output = [];

  for (let count = nums.length; count >= 0; count--) {
    if (count in countToNum) {
      for (const num of countToNum[count]) {
        output.push(num);

        if (output.length === k) {
          return output;
        }
      }
    }
  }

  return output;
};

// bucket sort (array)
// O(n) Time | O(n) Space
var topKFrequent = function (nums, k) {
  const counter = {};

  for (const num of nums) {
    counter[num] = (counter[num] ?? 0) + 1;
  }

  const countToNum = new Array(nums.length + 1).fill().map(count => []);

  for (const [num, count] of Object.entries(counter)) {
    countToNum[count].push(num);
  }

  const output = [];

  for (let count = nums.length; count >= 0; count--) {
    for (const num of countToNum[count]) {
      output.push(num);

      if (output.length === k) return output;
    }
  }
};

// quick select
// Avg O(n) Time | O(n) Space
// Worst O(n^2) Time | O(n) Space
var topKFrequent = function (nums, k) {
  const swap = (array, i, j) => [array[i], array[j]] = [array[j], array[i]];

  const counter = {};

  for (const num of nums) {
    counter[num] = (counter[num] ?? 0) + 1;
  }

  const uniques = Object.keys(counter).map(el => Number(el));

  function partition(leftIdx, rightIdx, pivotIdx) {
    const pivotCount = counter[uniques[pivotIdx]];

    swap(uniques, rightIdx, pivotIdx);

    let newIdx = leftIdx;

    for (let i = leftIdx; i < rightIdx; i++) {
      if (counter[uniques[i]] < pivotCount) {
        swap(uniques, i, newIdx);
        newIdx++;
      }
    }

    swap(uniques, rightIdx, newIdx);

    return newIdx;
  }

  function select(leftIdx, rightIdx, targetIdx) {
    if (leftIdx >= rightIdx) return;

    const guessIdx = leftIdx + 1;

    const pivotIdx = partition(leftIdx, rightIdx, guessIdx);

    if (pivotIdx === targetIdx) return;
    else if (pivotIdx < targetIdx) {
      return select(pivotIdx + 1, rightIdx, targetIdx);
    } else {
      return select(leftIdx, pivotIdx - 1, targetIdx);
    }
  }

  const n = uniques.length;
  select(0, n - 1, n - k);

  return uniques.slice(n - k);
};