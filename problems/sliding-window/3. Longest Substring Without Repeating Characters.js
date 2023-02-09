const _ = require('lodash');
const { PriorityQueue, MinPriorityQueue, MaxPriorityQueue } = require('@datastructures-js/priority-queue');
const { Queue } = require('@datastructures-js/queue');

/**
 * @param {string} s
 * @return {number}
 */

// O(n) Time | O(m) Space
// m: number of unique characters in s
var lengthOfLongestSubstring = function (s) {
  const lastSeen = {};
  let left = 0;
  let output = 0;

  for (let right = 0; right < s.length; right++) {
    const rightChar = s[right];
    if (lastSeen.hasOwnProperty(rightChar)) {
      left = Math.max(left, lastSeen[rightChar] + 1);
    }

    substringLength = right - left + 1;
    output = Math.max(output, substringLength);

    lastSeen[rightChar] = right;
  }

  return output;
};