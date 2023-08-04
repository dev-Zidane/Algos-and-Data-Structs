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

	unshift(val) {
		// Step 1: Create a new node with the provided value.
		let newNode = new Node(val);

		// Step 2: If the list is empty (length is 0), set the head and the tail to be the newly created node.
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			// Step 3: If there are nodes in the list.
			this.head.prev = newNode;
			// Step 3.2: Set the next property on the new node to be the head property.
			newNode.next = this.head;
			// Step 3.3: Update the head to be the new node.
			this.head = newNode;
		}

		// Step 4: Increment the length of the list by one.
		this.lenght++;

		// Step 5: Return the list.
		return this;
	}

	get(index) {
		// Step 1: If the index is less than 0 or greater or equal to the length, return null.
		if (index < 0 || index >= this.length) return null;

		let currentNode;
		let rightIndex = 0;
		let leftIndex = this.length - 1;
		let middle = Math.floor(this.length / 2);

		// Step 2: If the index is less than or equal to half the length of the list.
		if (index <= middle) {
			// Step 2.1: Loop through the list starting from the head and loop towards the middle.
			// Return the node once it is found.
			// Start from head
			currentNode = this.head;
			while (rightIndex !== index) {
				currentNode = currentNode.next;
				rightIndex++;
			}
			// Step 3: If the index is greater than half the length of the list.
		} else {
			// Start from tail
			currentNode = this.tail;
			// Step 3.1: Loop through the list starting from the tail and loop towards the middle.
			// Return the node once it is found.
			while (leftIndex !== index) {
				currentNode = currentNode.prev;
				leftIndex--;
			}
		}
		// Step 4: Return the node at the specified index.
		return currentNode;
	}

	set(index, value) {
		// Step 1: Use the get method to find the specific node.
		let foundNode = this.get(index);

		// Step 2: If the node is found, set the value of that node to be the value passed to the function and return true.
		if (foundNode.value !== null) {
			foundNode = value;
			return true;
		}

		// Step 3: If the node is not found, return false.
		return false;
	}

	insert(index, value) {
		// Step 1: If the index is less than zero or greater than the length, return false.
		if (index < 0 || index > this.length) return false;

		// Step 2: If the index is 0, unshift a new node to the start of the list.
		if (index === 0) return !!this.unshift(value);

		// Step 3: If the index is the same as the length, push a new node to the end of the list.
		if (index === this.length) !!this.push(value);

		// Step 4: Otherwise, use the get method to access the index - 1.
		let newNode = new Node(value);
		let prevNode = this.get(index - 1);
		let nextNode = prevNode.next;

		// Step 5: Have the previous property on the new node be the previous node.
		newNode.prev = prevNode;

		// Step 6: Have the next property on the new node be the after node.
		newNode.next = nextNode;

		// Step 7: Have the next property on the before node be the new node.
		prevNode.next = newNode;

		// Step 8: Have the previous property on the after node be the new node.
		nextNode.prev = newNode;

		// Step 9: Increment the length.
		this.length++;

		// Step 10: Return true.
		return true;
	}

	remove(index) {
		// Step 1: If the index is less than zero or greater than or equal to the length, return undefined.
		if (index < 0 || index >= this.length) return undefined;

		// Step 2: If the index is 0, shift a node from the start of the list.
		if (index === 0) return this.shift();

		// Step 3: If the index is the same as the length-1, pop a node from the end of the list.
		if (index === this.length - 1) return this.pop();

		// Step 4: Use the get method to retrieve the item to be removed.
		let removedNode = this.get(index);

		// Step 5: Update the next and prev properties to remove the found node from the list.
		let afterNode = removedNode.next;
		let prevNode = removedNode.prev;

		afterNode.prev = prevNode;
		prevNode.next = afterNode;

		// Step 6: Disconnect the removed node from the list (clean up).
		removedNode.next = null;
		removedNode.prev = null;

		// Step 7: Decrement the length.
		this.length--;

		// Step 8: Return the removed node.
		return removedNode;
	}
}
