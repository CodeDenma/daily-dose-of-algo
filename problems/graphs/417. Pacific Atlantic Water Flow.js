/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  const pacific = new Set();
  const atlantic = new Set();

  const [m, n] = [heights.length, heights[0].length];

  const output = [];

  function traverse(heights, row, col, ocean) {
    const coordinate = `(${row}, ${col})`;

    if (ocean.has(coordinate)) return;

    ocean.add(coordinate);

    function getNeighbors(heights, row, col) {
      const neighbors = [];
      const inbounds = (row, col) => 0 <= row && row < m && 0 <= col && col < n;

      const directions = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
      ];

      for (const [rowShift, colShift] of directions) {
        const [newRow, newCol] = [row + rowShift, col + colShift];

        if (
          inbounds(newRow, newCol) &&
          heights[newRow][newCol] >= heights[row][col]
        ) {
          neighbors.push([newRow, newCol]);
        }
      }

      return neighbors;
    }
    const neighbors = getNeighbors(heights, row, col);

    for (const [newRow, newCol] of neighbors) {
      traverse(heights, newRow, newCol, ocean);
    }
  }

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (row === 0 || col === 0) {
        traverse(heights, row, col, pacific);
      }

      if (row === m - 1 || col === n - 1) {
        traverse(heights, row, col, atlantic);
      }
    }
  }

  for (const coordinate of pacific) {
    const [row, col] = coordinate
      .slice(1, coordinate.length - 1)
      .split(",")
      .map((el) => Number(el));
    if (atlantic.has(coordinate)) {
      output.push([row, col]);
    }
  }

  return output;
};
