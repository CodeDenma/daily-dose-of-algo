const _ = require('lodash');
const { PriorityQueue, MinPriorityQueue, MaxPriorityQueue } = require('@datastructures-js/priority-queue');
const { Queue } = require('@datastructures-js/queue');


// O(n) Time | O(1) Space
var maxProfit = function (prices) {
  let output = 0;
  let minBuyPrice = Infinity;

  for (const price of prices) {
    minBuyPrice = Math.min(minBuyPrice, price);
    const profit = price - minBuyPrice;

    output = Math.max(output, profit);
  }

  return output;
};