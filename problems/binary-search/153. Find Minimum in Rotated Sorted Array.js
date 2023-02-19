/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0,
    right = nums.length - 1,
    mid;
  let output = Infinity;

  while (left <= right) {
    if (nums[left] <= nums[right]) {
      output = Math.min(output, nums[left]);
      break;
    }

    mid = Math.floor((left + right) / 2);
    output = Math.min(output, nums[mid]);

    if (nums[left] <= nums[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return output;
};
