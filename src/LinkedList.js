import { white } from "color-name";

class LinkedList {

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let node = new Node(value);
    // Check if the LL is empty 
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
  }

  append(value) {
    let node = new Node(value)
    // Check if the LL is empty
    if(this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      // Non-empty LL
      this.tail.next= node;
      this.tail = node;
    }
    // Increment length property
    this.length++;
  }
  print() {
    let display = "->";
    let pointer = this.head;
    while (pointer) {
      display += `${pointer.value} -> `;
      pointer = pointer.next;
    }
    display += "null";
  }

  nodeAt(index) {
    // Error checking, make sure the index < the lenght of our linked list
    if(index >= this.length) {
      throw Error ("Invalid index")
    }
    let counter = index; // makes sure we move to the right index
    let pointer = this.head; // start at head
    while(counter > 0) {
      counter--;
      pointer = pointer.next
    }
    return pointer.value;
  }
  pop() {
    // Make sure the LL is not empty
    if(this.head === null) {
      return null;
    }
    // save reference to the last item to return value
    const tail = this.tail;

    if(this.head === this.tail) { // Single element, make them all null
      this.head === null;
      this.tail === null;
    } else { // Find the penultimate node
      const pointer = this.head;
      while(pointer.next !== this.tail) {
        pointer = pointer.next;
      }
      this.tail = pointer; // Update tail to the previous node
      pointer.next = null; // Removing the previous tail from the LL
    }
    return tail.value;
  }
}

