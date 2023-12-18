const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.front = null;
    this.end = null;
    this.length = 0;
  }

  getUnderlyingList() {
    return this.front || undefined;
  }

  enqueue(value) {
    let node = new ListNode(value);

    if (this.length > 0) {
      this.end.next = node;
      this.end = node;
    } else {
      this.front = node;
      this.end = node;
    }

    this.length++;
  }

  dequeue() {
    if (this.length > 0) {
      let current = this.front;
      this.front = current.next;
      this.length--;

      return current.value;

    } else {
      return;
    }
  }
}

module.exports = {
  Queue
};
