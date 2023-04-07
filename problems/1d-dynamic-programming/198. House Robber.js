/**
 * @param {number[]} nums
 * @return {number}
 */

var rob = function (nums) {
  let rob1 = 0,
    rob2 = 0;

  for (const num of nums) {
    const temp = Math.max(rob1 + num, rob2);

    rob1 = rob2;
    rob2 = temp;
  }

  return rob2;
};

console.log(rob([1, 2, 3, 1])); // 4
console.log(rob([2, 7, 9, 3, 1])); // 12
