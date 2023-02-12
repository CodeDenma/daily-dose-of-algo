const _ = require('lodash');
const { PriorityQueue, MinPriorityQueue, MaxPriorityQueue } = require('@datastructures-js/priority-queue');
const { Queue } = require('@datastructures-js/queue');

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  const counter = {};
  let left = 0, maxCount = 0, output = 0;

  for (let right = 0; right < s.length; right++) {
    const rightChar = s[right];
    counter[rightChar] = (counter[rightChar] ?? 0) + 1;

    maxCount = Math.max(maxCount, counter[rightChar]);

    while ((right - left + 1 - maxCount) > k) {
      counter[s[left]] -= 1;
      left += 1;
    }

    output = Math.max(output, right - left + 1);
  }

  return output;
};