class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor(val) {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		let newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
			this.length++;
		}
		return this;
	}

	pop() {
		// Step 1: If the list is empty (no head), there's nothing to pop, so return undefined.
		if (!this.head) return undefined;

		// Step 2: Save the current tail node to return later.
		let current = this.tail;

		// Step 3: If there's only one node in the list.
		if (this.length === 1) {
			// Step 3.1: Set the head and the tail to be null (list is empty now).
			this.head = null;
			this.tail = null;

			// Step 4: If there's more than one node in the list.
		} else {
			// Step 4.1: Update the tail to be the previous node.
			this.tail = current.prev;

			// Step 4.2: Set the new tail's next to null.
			this.tail.next = null;

			// Step 4.3: Disconnect the popped node from the list (clean up).
			current.prev = null;
		}

		// Step 5: Decrease the length of the list by one.
		this.length--;

		// Step 6: Return the value of the node removed.
		return current;
	}

	shift() {
		// Step 1: If the list is empty (no head), there's nothing to shift, so return undefined.
		if (!this.head) return undefined;

		// Step 2: Save the current head node to return later.
		let oldHead = this.head;

		// Step 3: If there's only one node in the list.
		if (this.length === 1) {
			// Step 3.1: Set the head and the tail to be null (list is empty now).
			this.head = null;
			this.tail = null;
		}
		// Step 4: If there's more than one node in the list.
		else {
			// Step 4.1: Update the head to be the next node.
			this.head = oldHead.next;

			// Step 4.2: Set the new head's prev to null.
			this.head.prev = null;
			// Step 4.3: Disconnect the old head from the list (clean up).
			oldHead.next = null;
		}

		// Step 5: Decrease the length of the list by one.
		this.length--;

		// Step 6: Return the old head node.
		return oldHead;
	}
}
