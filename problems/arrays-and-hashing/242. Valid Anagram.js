
// O(n) Time | O(1) Space
// O(1) Space because there are 26 characters in the alphabet (a - z)
var isAnagram = function (s, t) {
  // if the lengths don't match, they can't be anagrams => return false
  if (s.length !== t.length) return false;

  const sCounter = {};
  const tCounter = {};

  // populate sCounter
  for (const sChar of s) {
    sCounter[sChar] = (sCounter[sChar] ?? 0) + 1;
  }

  // populate tCounter
  for (const tChar of t) {
    tCounter[tChar] = (tCounter[tChar] ?? 0) + 1;
  }

  // ! Alternative to populate sCounter, tCounter
  // const sCounter = [...s].reduce((acc, curr) => {
  //   return { ...acc, [curr]: (acc[curr] ?? 0) + 1 };
  // }, {});
  // const tCounter = [...t].reduce((acc, curr) => {
  //   return { ...acc, [curr]: (acc[curr] ?? 0) + 1 };
  // }, {});

  // loop through all characters in s
  // NOTE: can loop through t as well
  for (const [char, sCount] of Object.entries(sCounter)) {
    // get the tCount if char exists in tCounter ?? default it to 0 (0 count in tCounter)
    const tCount = (tCounter[char] ?? 0);

    // if the counts don't match, s and t are NOT anagrams => return false
    if (sCount !== tCount) return false;
  }

  return true;
};


console.log(isAnagram('anagram', 'nagaram'));