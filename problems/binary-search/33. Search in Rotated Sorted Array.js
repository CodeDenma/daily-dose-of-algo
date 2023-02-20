// class Solution:
//     def search(self, nums: List[int], target: int) -> int:
//         l, r = 0, len(nums) - 1

//         while l <= r:
//             m = (l + r) // 2

//             if nums[m] == target:
//                 return m
//             elif nums[l] <= nums[m]:
//                 if nums[l] <= target < nums[m]:
//                     r = m - 1
//                 else:
//                     l = m + 1
//             else:
//                 if nums[m] < target <= nums[r]:
//                     l = m + 1
//                 else:
//                     r = m - 1

//         return -1

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  let mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target <= nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
};
