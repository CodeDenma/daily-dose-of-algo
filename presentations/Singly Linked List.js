

class Node {
  constructor (data) {
      this.data = data;
      this.next = null;
  }
}

class SinglyLinkedList {
  constructor () {
      this.head = null;
      this.tail = null;
      this.length = 0;
  }

  push (data) {
      let newNode = new Node(data);
      if (!this.head) {
          this.head = newNode;
          this.tail = this.head;
      } else {
          this.tail.next = newNode;
          this.tail = newNode;
      }
      this.length++;
      return this;
  }

  pop () {
      if (!this.head) return undefined;
      let current = this.head;
      let newTail = current;
      while (current.next) {
          newTail = current;
          current = current.next;
      }
      this.tail = newTail;
      this.tail.next = null;
      this.length--;
      if (this.length === 0) {
          this.head = null;
          this.tail = null;
      }
      return current;
  }

  shift () {
      if (!this.head) return undefined;
      let currentHead = this.head;
      this.head = currentHead.next;
      this.length--;
      if (this.length === 0) {
          this.tail = null;
      }
      return currentHead;
  }

  unshift (data) {
      let newNode = new Node(data);
      if (!this.head) {
          this.head = newNode;
          this.tail = this.head;
      } else {
          newNode.next = this.head;
          this.head = newNode;
      }
      this.length++;
      return this;
  }

  get (index) {
      if (index < 0 || index >= this.length) return null;
      let counter = 0;
      let current = this.head;
      while (counter !== index) {
          current = current.next;
          counter++;
      }
      return current;
  }

  set (index, data) {
      let foundNode = this.get(index);
      if (foundNode) {
          foundNode.data = data;
          return true;
      }
      return false;
  }

  insert (index, data) {
      if (index < 0 || index > this.length) return false;
      if (index === 0) return !!this.unshift(data);
      if (index === this.length) return !!this.push(data);

      let newNode = new Node(data);
      let previous = this.get(index - 1);
      let temp = previous.next;
      previous.next = newNode;
      newNode.next = temp;

      this.length++;
      return true;
  }


  remove (index) {
      if (index < 0 || index >= this.length) return undefined;
      if (index === 0) return this.shift();
      if (index === this.length - 1) return this.pop();

      let previousNode = this.get(index - 1);
      let removed = previousNode.next;
      previousNode.next = removed.next;
      this.length--;
      return removed;
  }


  reverse () {
      let node = this.head;
      this.head = this.tail;
      this.tail = node;

      let next;
      let previous = null;

      for (let i = 0; i < this.length; i++) {
          next = node.next;
          node.next = previous;
          previous = node;
          node = next;
      }
      return this;
  }
}



function displayList(linkedList) {
    const output = [];
    let node = linkedList.head;
    
    // for (let i = 0; i < linkedList.length; i++) {
    while (node) {
        output.push({ current: node.data, next: node.next?.data })
        node = node.next
    }
    // }

    return output
}

const singlyLinkedList = new SinglyLinkedList();


singlyLinkedList.push('A');
singlyLinkedList.push('B');
singlyLinkedList.push('C');
singlyLinkedList.push('D');

console.log(singlyLinkedList);

console.log(displayList(singlyLinkedList))

function getFirstIthNode(linkedList, index) {
    let node = linkedList.head;

    // for (let i = 1; i < index; i++) {
    //     node = node.next
    // }

    while (node && index > 1) {
        node = node.next;
        index--;
    }

    return node
}

console.log(getFirstIthNode(singlyLinkedList, 1));


function getLastIthNode(linkedList, index) {
    let slowNode = fastNode = linkedList.head;
    
    while (fastNode && index) {
        fastNode = fastNode.next;
        index--;
    }

    while (fastNode) {
        slowNode = slowNode.next
        fastNode = fastNode.next
    }

    return slowNode;
}

console.log(getLastIthNode(singlyLinkedList, 1))


function getMiddleNode(linkedList) {
    let slowNode = linkedList.head, fastNode = linkedList.head;

    while (fastNode && fastNode.next) {
        slowNode = slowNode.next;
        fastNode = fastNode.next.next;
    }

    return slowNode
}

console.log(getMiddleNode(singlyLinkedList).data)

const singlyLinkedList2 = new SinglyLinkedList()

singlyLinkedList2.push(1);
singlyLinkedList2.push(2);
singlyLinkedList2.push(3);
singlyLinkedList2.push(4);

function combineLinkedLists(linkedList1, linkedList2) {
    const dummyNode = new Node(-Infinity)
    let combinedNode = dummyNode;
    let node1 = linkedList1.head, node2 = linkedList2.head;

    while (node1 || node2) {
        if (node1) {
            combinedNode.next = node1
            node1 = node1.next
            combinedNode = combinedNode.next
        } 
        if (node2) {
            combinedNode.next = node2
            node2 = node2.next
            combinedNode = combinedNode.next
        }
    }

    return dummyNode.next
}

const combinedList = combineLinkedLists(singlyLinkedList, singlyLinkedList2)


// console.log(displayList(combinedList))