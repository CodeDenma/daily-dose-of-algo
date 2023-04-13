/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const minNumOfCoins = new Array(amount + 1).fill(Infinity);
  minNumOfCoins[0] = 0;

  for (const coin of coins) {
    for (let amt = coin; amt <= amount; amt++) {
      minNumOfCoins[amt] = Math.min(
        minNumOfCoins[amt],
        minNumOfCoins[amt - coin] + 1
      );
    }
  }

  return minNumOfCoins[amount] === Infinity ? -1 : minNumOfCoins[amount];
};
