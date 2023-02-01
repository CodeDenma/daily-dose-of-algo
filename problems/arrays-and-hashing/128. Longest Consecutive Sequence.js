/**
 * @param {number[]} nums
 * @return {number}
 */

// O(n) Time | O(n) Space
var longestConsecutive = function (nums) {
  const numSet = new Set(nums);
  let output = 0;

  for (const num of numSet) {
    // ensure that num is the start of the sequence
    if (!(numSet.has(num - 1))) {
      let length = 0;
      let currentNum = num;

      while (numSet.has(currentNum)) {
        length++;
        currentNum++;
      }

      output = Math.max(output, length);
    }
  }

  return output;
};

// O(nlog(n)) Time | O(1) Space
var longestConsecutive = function (nums) {
  if (!nums.length) return 0;

  nums.sort((a, b) => a - b);

  let longestStreak = 1;
  let currentStreak = 1;

  for (let i = 1; i < nums.length; i++) {
    // avoid counting same numbers towards the sequence
    if (nums[i] === nums[i - 1]) continue;

    // continuing the streak
    if (nums[i] === nums[i - 1] + 1) {
      currentStreak++;
    } else {
      // evaluate longestStreak
      longestStreak = Math.max(longestStreak, currentStreak);
      // reset currentStreak to 1
      currentStreak = 1;
    }
  }

  // need to evaluate the max value because the last iteration of the for loop might have incremented the currentStreak
  return Math.max(longestStreak, currentStreak);
};