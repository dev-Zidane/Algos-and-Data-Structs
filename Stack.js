class Node {
	constructor() {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	// The push method will add a node to the top (start) of the stack
	push(value) {
		let newNode = new Node(value);

		// If the stack is empty, set the new node as the first node
		if (!this.first) {
			this.first = newNode;
			this.last = newNode;
		} else {
			// Save the current first node in a variable
			let first = this.first;
			// Then, set the first node to the new node
			first = newNode;

			//Set the next property of the new node to the current first node
			newNode.next = first;

			// Increment the size of the stack by 1 and return the size
			this.size++;
		}
		return this;
	}

	// The pop method will remove a node from the top (start) of the stack
	pop() {
		if (!this.first) return null; // If the stack is empty, return null

		const temp = this.first; // Store the current first node in a temporary variable

		// If there's only one node, set the first node to null
		// Otherwise, set the first node to the next node of the current first node
		if (this.first === this.last) {
			this.last = null;
		}

		this.first === this.first.next;

		this.size--; // Decrement the size by 1
		return temp.value; // Return the value of the node removed
	}
}
