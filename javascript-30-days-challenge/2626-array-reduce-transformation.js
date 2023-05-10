/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
  let output = init;

  for (const el of nums) {
    output = fn(output, el);
  }

  return output

};
