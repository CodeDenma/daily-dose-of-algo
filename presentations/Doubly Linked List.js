const jsdomQuokkaPlugin = require("jsdom-quokka-plugin");

class Node {
  constructor (value) {
      this.value = value;
      this.next = null;
      this.previous = null;
  }
}

class DoublyLinkedList {
  constructor () {
      this.head = null;
      this.tail = null;
      this.length = 0;
  }

  push (value) {
      let newNode = new Node(value);

      if (this.length === 0) {
          this.head = newNode;
          this.tail = newNode;
      } else {
          this.tail.next = newNode;
          newNode.previous = this.tail;
          this.tail = newNode;
      }
      this.length++;
      return this;
  }

  pop () {
      if (!this.head) return undefined;

      let poppedNode = this.tail;

      if (this.length === 1) {
          this.head = null;
          this.tail = null;
      } else {
          this.tail = poppedNode.previous;
          this.tail.next = null;
          poppedNode.previous = null;
      }

      this.length--;
      return poppedNode;
  }
  shift () {
      if (!this.length === 0) return undefined;
      let oldHead = this.head;
      if (this.length === 1) {
          this.head = null;
          this.tail = null;
      } else {
          this.head = oldHead.next;
          this.head.previous = null;
          oldHead.next = null;
      }
      this.length--;
      return oldHead;
  }
  unshift (value) {
      let newNode = new Node(value);
      if (this.length === 0) {
          this.head = newNode;
          this.tail = newNode;
      } else {
          this.head.previous = newNode;
          newNode.next = this.head;
          this.head = newNode;
      }
      this.length++;
      return this;
  }
  get (index) {
      let current;
      if (index < 0 || index >= this.length) return undefined;
      if (index <= this.length/2) {
          let count = 0;
          current = this.head;
          while (count !== index) {
              current = current.next;
              count++;
          }
      } else {
          let count = this.length - 1;
          current = this.tail;
          while (count !== index) {
              current = current.previous;
              count--;
          }
      }
      return current;
  }
  set (index, value) {
      let foundNode = this.get(index);
      if (foundNode !== undefined) {
          foundNode.value = value;
          return true;
      }
      return false;
  }
  insert (index, value) {
      if (index < 0 || index > this.length) return false;
      if (index === 0) return !!this.unshift(value);
      if (index === this.length) return !!this.push(value);

      let newNode = new Node(value);
      let beforeNode = this.get(index - 1);
      let afterNode = beforeNode.next;

      beforeNode.next = newNode, newNode.previous = beforeNode;
      newNode.next = afterNode, afterNode.previous = newNode;
      this.length++;
      return true;        
  }
  remove (index) {
      if (index < 0 || index >= this.length) return undefined;
      if (index === 0) return this.shift();
      if (index === this.length - 1) return this.pop();

      let removedNode = this.get(index);
      let beforeNode = removedNode.previous;
      let afterNode = removedNode.next;

      beforeNode.next = afterNode;
      afterNode.previous = beforeNode;

      removedNode.next = null;
      removedNode.previous = null;

      this.length--;
      return removedNode;
  }

  reverse () {
    let currentNode = this.head;
    let previousNode = null;

    while (currentNode) {
        const nextNode = currentNode.next

        previousNode = currentNode.previous;
        currentNode.previous = currentNode.next;
        currentNode.next = previousNode;

        currentNode = nextNode;
    }

    previousNode = this.head;
    this.head = this.tail;
    this.tail = previousNode;

    return this;
  }
}


const test = new DoublyLinkedList();

test.push(1);
console.log(test.head.value, test.tail.value)
test.push(2);
console.log(test.head.value, test.tail.value)
test.push(3);
console.log(test.head.value, test.tail.value)
test.push(4);
console.log(test.head.value, test.tail.value)
test.push(5);
console.log(test.head.value, test.tail.value)


function displayList(linkedList) {
    const output = [];
    let node = linkedList.head;
    
    for (let i = 0; i < linkedList.length; i++) {
        output.push({ previous: node.previous?.value, current: node.value, next: node.next?.value })
        node = node.next
    }

    return output
}

console.log(displayList(test))


test.reverse()


console.log(displayList(test))
