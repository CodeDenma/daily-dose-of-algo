const _ = require('lodash');
const { PriorityQueue, MinPriorityQueue, MaxPriorityQueue } = require('@datastructures-js/priority-queue');
const { Queue } = require('@datastructures-js/queue');


/**
 * @param {string[]} words
 * @return {string}
 */
// O(c) Time | O(v + e) Space
// c: total number of characters across all of words
// v: number of UNIQUE vertices (letters)
// e: number of edges
var alienOrder = function (words) {
  const adjList = {};

  for (const word of words) {
    for (const char of word) {
      adjList[char] = new Set();
    }
  }

  for (let i = 0; i < words.length - 1; i++) {
    const [word1, word2] = [words[i], words[i + 1]];
    const minLength = Math.min(word1.length, word2.length);

    if (word1.length > word2.length && (word1.slice(0, minLength) === word2.slice(0, minLength))) {
      return '';
    }

    for (let j = 0; j < minLength; j++) {
      const char1 = word1[j];
      const char2 = word2[j];

      if (word1[j] !== word2[j]) {
        adjList[char1].add(char2);
        break;
      }
    }
  }

  const visited = {};
  const output = [];


  function dfs(char) {
    if (char in visited) {
      return visited[char];
    }

    visited[char] = true;

    for (const nextChar of adjList[char]) {
      if (dfs(nextChar)) {
        return true;
      }
    }

    visited[char] = false;
    output.push(char);
  }

  for (const char in adjList) {
    if (dfs(char)) {
      return '';
    }
  }

  return output.reverse().join('');
};