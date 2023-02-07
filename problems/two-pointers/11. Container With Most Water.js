const _ = require('lodash');
const { PriorityQueue, MinPriorityQueue, MaxPriorityQueue } = require('@datastructures-js/priority-queue');
const { Queue } = require('@datastructures-js/queue');


/**
 * @param {number[]} heights
 * @return {number}
 */

// Brute Force
// O(n^2) Time | O(1) Space
var maxArea = function (heights) {
  let output = 0;

  for (let left = 0; left < heights.length; left++) {
    for (let right = left + 1; right < heights.length; right++) {
      const width = right - left;
      const [leftHeight, rightHeight] = [heights[left], heights[right]];
      const height = Math.min(leftHeight, rightHeight);

      const area = width * height;

      output = Math.max(output, area);
    }
  }

  return output;
};

// Two Pointers
// O(n) Time | O(1) Space
var maxArea = function (heights) {
  let output = 0;
  let left = 0, right = heights.length - 1;

  while (left < right) {
    const [leftHeight, rightHeight] = [heights[left], heights[right]];

    const height = Math.min(leftHeight, rightHeight);
    const width = (right - left);
    const area = height * width;

    output = Math.max(area, output);

    if (leftHeight < rightHeight) {
      left++;
    } else {
      right--;
    }
  }

  return output;
};
