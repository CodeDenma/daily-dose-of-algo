function isAlpha(char) {
  const aCharCode = 'a'.charCodeAt();
  const ACharCode = 'A'.charCodeAt();
  const zCharCode = 'z'.charCodeAt();
  const ZCharCode = 'Z'.charCodeAt();

  const isLowerAlpha = aCharCode <= char.charCodeAt() && char.charCodeAt() <= zCharCode;

  const isUpperAlpha = ACharCode <= char.charCodeAt() && char.charCodeAt() <= ZCharCode;

  return isLowerAlpha || isUpperAlpha;
};


function isNum(char) {
  const zeroCharCode = '0'.charCodeAt();
  const nineCharCode = '9'.charCodeAt();

  return zeroCharCode <= char.charCodeAt() && char.charCodeAt() <= nineCharCode;
}

function isAlnum(char) {
  return isAlpha(char.toLowerCase()) || isNum(char);
}


console.log(isAlnum('a'));
console.log(isAlpha('a'));
console.log(isNum('a'));

console.log(isAlnum('9'));
console.log(isAlpha('9'));
console.log(isNum('9'));

console.log(isAlnum('*'));
console.log(isAlpha('*'));
console.log(isNum('*'));

console.log('A man, a plan, a canal: Panama');