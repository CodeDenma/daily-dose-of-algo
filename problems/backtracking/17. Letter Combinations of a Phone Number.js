var letterCombinations = function (digits) {
  // ruling out empty digits
  // condition needed for empty arrays being joined into an empty string
  // i.e. input: digits ''
  // expected output: []
  // output (without this condition): ['']
  if (!digits.length) {
    return [];
  }

  const combinations = [];

  const digitToLetter = {
    '0': '0',
    '1': '1',
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  };

  function backtrack(index, combo) {
    if (index === digits.length) {
      combinations.push(combo.join(''));
      return;
    }

    const digit = digits[index];
    const letters = digitToLetter[digit];

    // for each letter that corresponds to a phone digit, create a new combination based on the current combination + the letter
    for (const letter of letters) {
      const newCombo = [...combo, letter];
      backtrack(index + 1, newCombo);
    }
  }

  backtrack(0, []);

  return combinations;
};