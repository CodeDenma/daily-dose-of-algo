const _ = require('lodash');
const { PriorityQueue, MinPriorityQueue, MaxPriorityQueue } = require('@datastructures-js/priority-queue');
const { Queue } = require('@datastructures-js/queue');

// displaying subarray sums of size given by windowSize
function slidingWindowDemo(array, windowSize) {
  const window = [];
  const subarraySums = [];

  for (let i = 0; i < windowSize; i++) {
    window.push(array[i]);
  }

  subarraySums.push(window.reduce((a, b) => a + b, 0));

  console.log(window);
  console.log(subarraySums);

  for (let j = windowSize; j < array.length; j++) {
    const outElement = window.shift();
    console.log(window);

    const inElement = array[j];
    window.push(inElement);
    console.log(window);

    const newSubarraySum = subarraySums[subarraySums.length - 1] - outElement + inElement;

    subarraySums.push(newSubarraySum);
    console.log(subarraySums);
  }

  return subarraySums;
}

const testData = [1, 2, 3, 4, 5, 6];
slidingWindowDemo(testData, 3);