/**
 * @param {number[]} prices
 * @return {number}
 */


// O(n) Time | O(n) Space
var maxProfit = function (prices) {
  const cache = {}; // "(index, canBuy)": maxProfit

  function dfs(index, canBuy) {
    if (index >= prices.length) return 0;

    const key = `(${index}, ${canBuy})`;

    if (cache.hasOwnProperty(key)) return cache[key];

    const cooldownProfit = dfs(index + 1, canBuy);

    if (canBuy) {
      const buyProfit = dfs(index + 1, !canBuy) - prices[index];

      cache[key] = Math.max(buyProfit, cooldownProfit);
    } else {
      const sellProfit = dfs(index + 2, !canBuy) + prices[index];

      cache[key] = Math.max(sellProfit, cooldownProfit);
    }

    return cache[key];
  }

  return dfs(0, true);
};