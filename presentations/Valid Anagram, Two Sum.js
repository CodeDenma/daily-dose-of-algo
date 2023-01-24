

// * O(n) Time | O(1) Space
// ! O(1) Space assumes that there will be only lower case alphabet letters in the word
function getCounterArray(word) {
  const counter = new Array(26).fill(0);

  for (const char of word) {
    const charCode = char.charCodeAt();

    const position = charCode - 'a'.charCodeAt();

    counter[position]++;
  }

  return counter;
}

// * O(nlog(n)) Time | O(n) Space
function getSortedWord(word) {
  return [...word].sort().join('');
}


var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const sCounter = {};
  const tCounter = {};

  for (const sChar of s) {
    sCounter[sChar] = (sCounter[sChar] ?? 0) + 1;
  }

  for (const tChar of t) {
    tCounter[tChar] = (tCounter[tChar] ?? 0) + 1;
  }

  for (const [char, sCount] of Object.entries(sCounter)) {
    const tCount = (tCounter[char] ?? 0);

    if (sCount !== tCount) return false;
  }

  return true;
};


// console.log(isAnagram('anagram', 'nagaram'));

// console.log(getCounterArray('listen'));

console.log(getSortedWord('listen'));
console.log(getSortedWord('silent'));


console.log(getSortedWord('leetcode'));
console.log(getSortedWord('neetcode'));