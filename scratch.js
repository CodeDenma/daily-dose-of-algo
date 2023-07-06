




console.log('object');

// console.log(new Date().);


console.log('obt');

const testRegex = /[a-z0-9]/

console.log(testRegex.test());


const testFunc = (s) => {
  s = s.toLowerCase();

  return s;
}


const testString = "SQUIDWARD";

const lowerCased = testFunc(testString);


console.log(lowerCased);
console.log(testString);


const testFunc2 = (a) => {
  a = a.map((el, index) => [el, index])
  // a = a.concat('d');
  // a = Object.assign(a, {'c': 'd'})

  return a;
}

const testArray = [0, 1, 2]
// const testArray = {'a': 'a'}

const mappedArray = testFunc2(testArray);

console.log(mappedArray);
console.log(testArray);


