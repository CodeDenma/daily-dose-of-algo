/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const output = [];

  function dfs(index, current, total) {
    if (total === target) {
      output.push(current.slice());
      return;
    }

    if (index >= candidates.length || total > target) return;

    current.push(candidates[index]);
    dfs(index, current, total + candidates[index]);
    current.pop();

    dfs(index + 1, current, total);
  }

  dfs(0, [], 0);

  return output;
};
