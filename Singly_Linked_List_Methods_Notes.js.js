class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	push(val) {
		// creating new node using the value passed in
		let newNode = new Node(val);

		// if there's no head, set the new node as the head and tail
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			// else, add the new node to the end of the list and make the new node the tail
			this.tail.next = newNode;
			this.tail = newNode;
		}
		// increment the length of the list by 1
		this.length++;

		// return the entire list
		return this;
	}

	pop() {
		// if there are no nodes in the list, return undefined
		if (!this.head) return undefined;

		let current = this.head; // start traversal from the head
		let newTail = current; // keep track of the second to last node

		// while there's a next node
		while (current.next) {
			// shift our pointers down
			newTail = current;
			current = current.next;
		}
		// when we break the while loop, current will be the last item
		// we then set the tail to be the second to last item
		this.tail = newTail;
		this.tail.next = null; // remove the connection to the last item

		// decrement the length of the list
		this.length--;

		// if we've popped off everything in the list, reset head and tail to null
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}

		// return the value of the node removed
		return current;
	}

	shift() {
		// if there are no nodes in the list, return undefined
		if (!this.head) return undefined;

		// save the current head in a variable
		let currentHead = this.head;

		// set the current head to be the next node
		this.head = currentHead.next;

		// decrement the length of the list
		this.length--;

		// if we've shifted off everything in the list, reset head and tail to null
		if (this.length === 0) {
			this.tail = null;
		}

		// return the value of the node removed
		return currentHead;
	}

	unshift(val) {
		// create a new node using the value passed to the function
		let newNode = new Node(val);

		if (!this.head) {
			// if there is no head property on the list, set the head and tail to be the newly created node
			this.head = newNode;
			this.tail = newNode.next;
		} else {
			// otherwise set the newly created node's next property to be the current head property on the list
			newNode.next = this.head;

			// set the head property on the list to be that newly created node
			this.head = newNode;
		}

		// increment the length of the list by 1
		this.length++;

		// return the linked list
		return this;
	}

	get(index) {
		// if index is less than zero or greater than or equal to the length of the list, return null
		if (index < 0 || index >= this.length) return null;
		let counter = 0; // set a counter variable to keep track of our position

		let current = this.head; // start at the head of the list

		// while the counter isn't equal to the index
		while (counter !== index) {
			// move along the list
			current = current.next;
			counter++;
		}
		// when we've reached our desired node, return it
		return current;
	}

	set(index, val) {
		// Use the get method to find the specific node.
		let foundNode = this.get(index);

		// If the node is found, set the value of that node to be the value passed to the function and return true.
		if (foundNode !== val) return false;
		if (foundNode === val) {
			val = foundNode.val;
			return true;
		}

		// If the node is not found, return false.
		return false;
	}

	insert(index, val) {
		// If the index is less than zero or greater than the length, return false.
		if (index < 0 || index > this.length) return false;

		// If the index is the same as the length, push a new node to the end of the list.
		if (index === this.length) !!this.push(val);

		// If the index is 0, unshift a new node to the start of the list.
		if (index === 0) !!this.unshift(val);

		// Otherwise, use the get method to access the node at the index - 1.
		let newNode = new Node(val);
		let prevNode = this.get(index - 1);
		let temp = prevNode.next;

		// Set the next property on that node to be the new node.
		prevNode.next = newNode;

		// Set the next property on that node to be the new node.
		newNode.next = temp;

		// Increment the length.
		this.length++;

		return true;
	}

	remove(index) {
		// If the index is less than zero or greater than the length, return undefined.
		if (index < 0 || index >= this.length) return undefined;

		// If the index is the same as the length-1, pop.
		if (index === this.length - 1) return !!this.pop(index);

		// If the index is 0, shift.
		if (index === 0) return !!this.shift();

		// Otherwise, use the get method to access the node at the index - 1
		let prevNode = this.get(index - 1);
		let removed = prevNode.next;

		// Set the next property on that node to be the next of the next node.
		prevNode.next = removed.next;

		// Decrement the length.
		this.length--;

		// Return the value of the node removed.
		return removed;
	}

	reverse() {
		// Swap the head and tail
		let node = this.head;
		this.head = this.tail;
		this.tail = node;
		let prev = null;
		let next;

		// Loop through the list
		for (let i = 0; i < this.length; i++) {
			next = node.next; // Save the next node
			node.next = prev; // Reverse the direction of the 'next' pointer

			// Move on to the next node
			prev = node;
			node = next;
		}
		return this;
	}
	print() {
		var arr = [];
		var current = this.head;
		while (current) {
			arr.push(current.val);
			current = current.next;
		}
		console.log(arr);
	}
}

var list = new SinglyLinkedList();

list.push([100, 200, 400, 600, 800]);
list.push('GOODBYE');
