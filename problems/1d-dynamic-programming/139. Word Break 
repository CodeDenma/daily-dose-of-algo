
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// neetcode solution
var wordBreak = function (s, wordDict) {
  // true means that a we can generate all the characters starting from the given index with words from the wordDict
  const table = new Array(s.length + 1).fill(false);
  // since we don't need any word to generate an empty string (string sliced from the last index to the end of the string is empty)
  table[table.length - 1] = true

  for (let i = table.length - 1; i >= 0; i++) {
    for (const word of wordDict) {
      if (i + word.length <= s.length && s.slice(i, i + word.length) === word) {
        table[i] = table[i + word.length]

        if (table[i]) break;
      }
    }
  }

  return table[0]
};