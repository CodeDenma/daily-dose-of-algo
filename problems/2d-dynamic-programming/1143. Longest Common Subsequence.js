/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  let shorter, longer;
  if (text1.length < text2.length) {
    shorter = text1, longer = text2;

  } else {
    shorter = text2, longer = text1;
  }


  let prevRow = new Array(shorter.length + 1).fill(0);
  let currRow = new Array(shorter.length + 1).fill(0);

  for (let col = longer.length - 1; col >= 0; col--) {
    for (let row = shorter.length - 1; row >= 0; row--) {
      if (longer[col] === shorter[row]) {
        currRow[row] = prevRow[row + 1] + 1;
      } else {
        currRow[row] = Math.max(prevRow[row], currRow[row + 1]);
      }
    }

    [prevRow, currRow] = [currRow, prevRow]
  }


  return prevRow[0];
};
