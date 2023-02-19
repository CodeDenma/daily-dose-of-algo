// class Solution:
//     def findMin(self, nums: List[int]) -> int:
//         l, r = 0, len(nums) - 1
//         output = float('inf')

//         while l <= r:
//             if nums[l] < nums[r]:
//                 output = min(output, nums[l])
//                 break

//             m = (l + r) // 2
//             output = min(output, nums[m])

//             if nums[l] <= nums[m]:
//                 l = m + 1
//             else:
//                 r = m - 1

//         return output

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
