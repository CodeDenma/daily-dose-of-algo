/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

// dp
// O(mn) Time | O(mn) Space
var uniquePaths = function (m, n) {
  const table = new Array(m).fill().map((el) => new Array(n).fill(1));

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      table[i][j] = table[i - 1][j] + table[i][j - 1];
    }
  }

  return table[table.length - 1][table[0].length - 1];
};

// dp optimized
var uniquePaths = function (m, n) {
  let row = new Array(n).fill(1);

  for (let i = 0; i < m - 1; i++) {
    const newRow = new Array(n).fill(1);
    for (let j = n - 2; j >= 0; j--) {
      newRow[j] = newRow[j + 1] + row[j];
    }

    row = newRow;
  }

  return row[0];
};
