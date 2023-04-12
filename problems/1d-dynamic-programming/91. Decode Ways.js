/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  if (s[0] === "0") return 0;

  const canDecode = (twoDigits) =>
    twoDigits[0] === "0"
      ? false
      : 0 <= Number(twoDigits) && Number(twoDigits) <= 26;

  let prev = 1,
    acc = 1,
    temp = 0;

  for (let i = 1; i < s.length; i++) {
    temp = s[i] === "0" ? 0 : acc;

    const twoDigits = s.slice(i - 1, i + 1);

    if (canDecode(twoDigits)) temp += prev;

    prev = acc;
    acc = temp;
  }

  return acc;
};
