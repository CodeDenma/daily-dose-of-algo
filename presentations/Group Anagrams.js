function getObjCounter(iterable) {
  const counter = {};

  for (const current of iterable) {
    counter[current] = (counter[current] || 0) + 1;
  }

  return counter;
}

function getMapCounter(iterable) {
  counter = new Map();

  for (const current of iterable) {
    const newCount = (counter.get(current) || 0) + 1;

    counter.set(current, newCount);
  }

  return counter;
}

const testWord = "pog";

const wordObjCounter = getObjCounter(testWord);
const wordMapCounter = getMapCounter(testWord);

// console.log(wordObjCounter);
// console.log(wordMapCounter);

class LinkedListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const node1 = new LinkedListNode(1);
const node2 = new LinkedListNode(2);
const node3 = new LinkedListNode(3);
const node4 = new LinkedListNode(4);
const node5 = new LinkedListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

const listOfNodes = [node1, node2, node3, node4, node5, node5];

const objCounter = getObjCounter(listOfNodes);
const mapCounter = getMapCounter(listOfNodes);

console.log(objCounter);
console.log(objCounter[node1]);
console.log(objCounter[node5]);

console.log(mapCounter.get(node1));
console.log(mapCounter.get(node5));

demo("1pog");

function demo(string) {
  const counter = {};
  let left = 0;

  for (let j = 0; j < "pog".length; j++) {
    const char = string[j];

    counter[char] = (counter[char] || 0) + 1;
  }

  console.log(counter);

  for (let right = 3; right < string.length; right++) {
    const prevChar = string[right - 3];

    console.log(counter);

    // * decrementation
    counter[prevChar] -= 1;

    // * deletion
    if (counter[prevChar] === 0) delete counter[prevChar];

    console.log(counter);

    const currentChar = string[right];

    // * incrementation
    counter[currentChar] = (counter[currentChar] || 0) + 1;

    console.log(counter);
  }
}
