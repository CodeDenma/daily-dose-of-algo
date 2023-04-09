/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let output = 0;
  function countPali(left, right) {
    let count = 0;

    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
      count++;
    }

    return count;
  }

  for (let i = 0; i < s.length; i++) {
    output += countPali(i, i + 1);
    output += countPali(i, i);
  }

  return output;
};
