class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.first = null; // Represents the front of the queue
		this.last = null; // Represents the rear of the queue
		this.size = 0;
	}

	// Enqueue method will add a node to the rear of the queue
	enqueue(val) {
		let newNode = new Node(val);
		if (!this.first) {
			this.first = newNode;
			this.last = newNode;
		} else {
			// Else, add the new node to the rear and update the last pointer
			this.last.next = newNode;
			this.last = newNode;
			return ++this.size;
		}
	}

	// Dequeue method will remove a node from the front of the queue
	dequeue() {
		if (!this.first) return null;

		let temp = this.first;

		// If there's only one node, update the last to be null
		if (this.first === this.last) {
			this.last = null;
		} else {
			// Update the front to be the next node
			this.first = this.first.next;
			this.size--;
			return temp.value;
		}
	}
}
