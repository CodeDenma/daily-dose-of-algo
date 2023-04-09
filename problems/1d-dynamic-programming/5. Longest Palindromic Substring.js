/**
 * @param {string} s
 * @return {string}
 */

// Naive Solution
// O(n^3) Time | O(1) Space
var longestPalindrome = function (text) {
  let maxLeft = (maxRight = 0);

  function isPalindrome(left, right) {
    while (left < right) {
      if (text[left] !== text[right]) return false;

      left++;
      right--;
    }

    return true;
  }

  for (let left = 0; left < text.length; left++) {
    for (let right = 0; right < text.length; right++) {
      if (isPalindrome(left, right)) {
        if (right - left > maxRight - maxLeft) {
          [maxLeft, maxRight] = [left, right];
        }
      }
    }
  }

  return text.slice(maxLeft, maxRight + 1);
};

// dynamic programming
// O(n^2) Time | O(n^2) Space
var longestPalindrome = function (text) {
  const table = new Array(text.length)
    .fill()
    .map((el) => new Array(text.length).fill(false));

  let maxLeft = (maxRight = 0);

  for (let i = 0; i < text.length; i++) {
    table[i][i] = true;
  }

  for (let left = text.length - 1; left >= 0; left--) {
    for (let right = left + 1; right < text.length; right++) {
      if (text[left] === text[right]) {
        if (right - left === 1 || table[left + 1][right - 1]) {
          table[left][right] = true;

          if (right - left > maxRight - maxLeft) {
            [maxLeft, maxRight] = [left, right];
          }
        }
      }
    }
  }

  return text.slice(maxLeft, maxRight + 1);
};

// expanding from center
// O(n^2) Time | O(1) Space
var longestPalindrome = function (text) {
  function getLongestPalindrome(left, right) {
    while (left >= 0 && right < text.length && text[left] === text[right]) {
      left--;
      right++;
    }

    return [left + 1, right - 1];
  }

  let maxLeft = (maxRight = 0);

  for (let i = 1; i < text.length; i++) {
    const [oddLeft, oddRight] = getLongestPalindrome(i, i);
    const [evenLeft, evenRight] = getLongestPalindrome(i - 1, i);

    if (evenRight - evenLeft > maxRight - maxLeft) {
      [maxLeft, maxRight] = [evenLeft, evenRight];
    }

    if (oddRight - oddLeft > maxRight - maxLeft) {
      [maxLeft, maxRight] = [oddLeft, oddRight];
    }
  }

  return text.slice(maxLeft, maxRight + 1);
};
