/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
class Trie {
  constructor() {
    this.root = {};
  }

  addWord(word) {
    let node = this.root;

    for (const char of word) {
      if (!node.hasOwnProperty(char)) {
        node[char] = {};
      }

      node = node[char];
    }

    node["*"] = word;
  }
}

var findWords = function (board, words) {
  function backtrack(row, col, parent, foundWords) {
    function getNeighbors() {
      const neighbors = [];
      const directions = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
      ];

      const inbounds = (row, col) =>
        0 <= row && row < board.length && 0 <= col && col < board[0].length;

      for (const [rowShift, colShift] of directions) {
        const [newRow, newCol] = [row + rowShift, col + colShift];

        if (inbounds(newRow, newCol)) {
          neighbors.push([newRow, newCol]);
        }
      }

      return neighbors;
    }

    const letter = board[row][col];
    const node = parent[letter];

    if (node.hasOwnProperty("*")) {
      foundWords.add(node["*"]);
    }

    board[row][col] = "#";

    const neighbors = getNeighbors();

    for (const [newRow, newCol] of neighbors) {
      const newLetter = board[newRow][newCol];

      if (node.hasOwnProperty(newLetter)) {
        backtrack(newRow, newCol, node, foundWords);
      }
    }

    board[row][col] = letter;
  }

  const foundWords = new Set();
  const trie = new Trie();

  for (const word of words) {
    trie.addWord(word);
  }

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (trie.root.hasOwnProperty(board[row][col])) {
        backtrack(row, col, trie.root, foundWords);
      }
    }
  }

  return Array.from(foundWords);
};
