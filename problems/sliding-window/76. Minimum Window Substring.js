

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (!s || !t || t.length > s.length) return '';

  tCounter = {};

  for (const tChar of t) {
    tCounter[tChar] = (tCounter[tChar] ?? 0) + 1;
  }


  let have = 0, need = Object.keys(tCounter).length;

  const window = {};

  let minLeft = 0, minRight = 0;
  let minLength = Infinity;

  let left = 0;

  for (let right = 0; right < s.length; right++) {
    const rightChar = s[right];

    window[rightChar] = (window[rightChar] ?? 0) + 1;

    if ((tCounter[rightChar] ?? 0) === (window[rightChar] ?? 0)) {
      have++;
    }

    while (have === need) {
      const leftChar = s[left];

      const currentLength = right - left + 1;

      if (currentLength < minLength) {
        minLeft = left;
        minRight = right;
        minLength = currentLength;
      }

      window[leftChar] -= 1;

      if (window[leftChar] === 0) delete window[leftChar];

      if ((window[leftChar] ?? 0) < (tCounter[leftChar] ?? 0)) {
        have--;
      }

      left++;
    }
  }

  return minLength === Infinity ? '' : s.slice(minLeft, minRight + 1);
};