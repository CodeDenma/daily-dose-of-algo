/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
// Jongsun
var exist = function (board, word) {
  const [m, n] = [board.length, board[0].length];

  const wordCounter = {};

  if (word.length > m * n) return false;

  const inbounds = (row, col) => 0 <= row && row < m && 0 <= col && col < n;

  function backtrack(row, col, index) {
    if (index === word.length - 1) return true;

    const char = board[row][col];
    board[row][col] = "#";

    const directions = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];

    for (const [rowShift, colShift] of directions) {
      const [newRow, newCol] = [row + rowShift, col + colShift];

      if (
        !inbounds(newRow, newCol) ||
        board[newRow][newCol] !== word[index + 1]
      )
        continue;

      if (backtrack(newRow, newCol, index + 1)) return true;
    }

    board[row][col] = char;

    return false;
  }

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (board[row][col] === word[0] && backtrack(row, col, 0)) return true;
    }
  }

  return false;
};
