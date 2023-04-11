/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (!s) return "";

  const getIdxes = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }

    return [left + 1, right - 1];
  };

  const getlength = (leftidx, rightidx) => rightidx - leftidx + 1;
  let outputleft = 0,
    outputright = 0;

  for (let i = 0; i < s.length; i++) {
    const [evenleft, evenright] = getIdxes(i, i);
    const [oddleft, oddright] = getIdxes(i, i + 1);

    const outputlength = getlength(outputleft, outputright);
    const oddlength = getlength(oddleft, oddright);
    const evenlength = getlength(evenleft, evenright);

    if (oddlength > outputlength) {
      [outputleft, outputright] = [oddleft, oddright];
    }

    if (evenlength > outputlength) {
      [outputleft, outputright] = [evenleft, evenright];
    }
  }

  return s.slice(outputleft, outputright + 1);
};
