/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 2) return n;
  let oneStepAgo = 1,
    twoStepsAgo = 1;

  for (let i = 2; i < n; i++) {
    const temp = oneStepAgo;
    oneStepAgo += twoStepsAgo;
    twoStepsAgo = temp;
  }

  return oneStepAgo + twoStepsAgo;
};

console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
console.log(climbStairs(3)); // 3
