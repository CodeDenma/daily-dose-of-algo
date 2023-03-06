/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */

// neetcode
// O(mn) Time | O(mn) Space
// m: len(s) | n: len(t)
var numDistinct = function (s, t) {
  const cache = {};

  function dfs(i, j) {
    if (j === t.length) {
      return 1;
    } else if (i === s.length) {
      return 0;
    }

    const key = `(${i}, ${j})`;

    if (cache.hasOwnProperty(key)) {
      return cache[key];
    }

    if (s[i] === t[j]) {
      cache[key] = dfs(i + 1, j + 1) + dfs(i + 1, j);
    } else {
      cache[key] = dfs(i + 1, j);
    }

    return cache[key];
  }

  return dfs(0, 0);
};