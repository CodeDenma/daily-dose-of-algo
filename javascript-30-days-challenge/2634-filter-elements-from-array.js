/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
  const output = [];

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (fn(el, i)) {
      output.push(el);
    }
  }

  return output;
};
