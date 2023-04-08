/**
 * @param {number[]} nums
 * @return {number}
 */

var rob = function (nums) {
  function helper(startIdx, endIdx) {
    let rob1 = 0,
      rob2 = 0;

    for (let i = startIdx; i <= endIdx; i++) {
      const temp = Math.max(rob1 + nums[i], rob2);

      rob1 = rob2;
      rob2 = temp;
    }

    return rob2;
  }

  return Math.max(
    nums[0],
    helper(0, nums.length - 2),
    helper(1, nums.length - 1)
  );
};
