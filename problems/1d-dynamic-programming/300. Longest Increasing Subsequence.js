/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  function bisectLeft(array, target) {
    let leftIdx = 0, rightIdx = array.length - 1;

    while (leftIdx <= rightIdx) {
      const midIdx = Math.floor((leftIdx + rightIdx) / 2);

      if (array[midIdx] < target) {
        leftIdx = midIdx + 1;
      } else {
        rightIdx = midIdx - 1;
      }

    }
    return leftIdx;
  }

  const sequence = [];

  for (const num of nums) {
    const index = bisectLeft(sequence, num);

    if (index === sequence.length) sequence.push(num);
    else sequence[index] = num;
  }

  return sequence.length;
};