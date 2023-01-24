const _ = require('lodash');
const { PriorityQueue, MinPriorityQueue, MaxPriorityQueue } = require('@datastructures-js/priority-queue');
const { Queue } = require('@datastructures-js/queue');


// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.



// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true


// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109


/**
 * @param {number[]} nums
 * @return {boolean}
 */

// solution 1: cache
// O(n) Time | O(n) Space
var containsDuplicate = function (nums) {
  // create a cache to store the numbers visited
  const numSet = new Set();

  // loop thru all of the numbers
  for (const num of nums) {
    // if we've seen the current number, there's a duplicate => return true
    if (numSet.has(num)) return true;

    // add the current number into the numSet
    numSet.add(num);
  }

  // since we've iterated through all of the numbers and haven't found duplicate, there's no duplicate => return false
  return false;
};


// solution 2: sort
// O(nlog(n)) Time | O(1) Space
var containsDuplicate = function (nums) {
  // sort the numbers in ascending order
  nums.sort((a, b) => a - b);

  // loop through nums starting from index of 1 (because we're planning on comparing the previous number to the current number)
  for (let i = 1; i < nums.length; i++) {
    const prevNum = nums[i - 1];
    const currNum = nums[i];

    // if previous number matches the current number, there is a duplicate in nums => return true
    if (prevNum === currNum) return true;
  }

  return false;
};