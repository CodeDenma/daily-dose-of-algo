/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let output = 0;

  const inbounds = (row, col) =>
    0 <= row && row < grid.length && 0 <= col && col < grid[0].length;
  function zeroOut(row, col) {
    if (!inbounds(row, col) || grid[row][col] === "0") return;

    grid[row][col] = "0";

    function getNeighbors(row, col) {
      const neighbors = [];

      const directions = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
      ];

      for (const [rowShift, colShift] of directions) {
        const [newRow, newCol] = [row + rowShift, col + colShift];

        if (inbounds(newRow, newCol) && grid[newRow][newCol] === "1") {
          neighbors.push([newRow, newCol]);
        }
      }

      return neighbors;
    }
    const neighbors = getNeighbors(row, col);

    for (const [newRow, newCol] of neighbors) {
      zeroOut(newRow, newCol);
    }
  }

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === "1") {
        output++;
        zeroOut(row, col);
      }
    }
  }

  return output;
};
