class MaxBinaryHeap {
	constructor() {
		this.values = [41, 39, 33, 18, 27, 12];
	}

	insert(value) {
		this.values.push(value); // Step 1: Add the value to the end

		let index = this.values.length - 1; // Start with the last index

		const element = this.values[index]; // The newly added element

		// Step 2: Bubble Up
		while (index > 0) {
			let parentIndex = ~~((index - 1) / 2); // Get parent index
			let parent = this.values[parentIndex]; // Get parent value

			if (element <= parent) break; // If the element is less than or equal to the parent, we're done

			// Swap the element with its parent
			this.values[parentIndex] = element;
			this.values[index] = parent;

			// Move up to the parent's index and continue
			index = parentIndex;
		}
	}

	extractMax() {
		let max = this.values[0];
		let end = this.values.pop();
		// let parentIndex = ~~((index - 1) / 2);
		if (this.values.length > 0) {
			this.values[0] = end; // Replace the root with the last element

			// Step 3: Sink down the new root
			this.sinkDown();
		}
		return max;
	}
	sinkDown() {
		let idx = 0; // Initialize the index of the element to sink down
		const length = this.values.length; // Store the total length of the heap array
		const element = this.values[0]; // Store the element that will be sunk down

		while (true) {
			// Loop until break statement
			const leftChildIdx = 2 * idx + 1; // Calculate the index of the left child
			const rightChildIdx = 2 * idx + 2; // Calculate the index of the right child
			let leftChild, rightChild; // Declare variables to store left and right child values
			let swap = null; // Initialize swap variable to keep track of any swaps

			if (leftChildIdx < length) {
				// If there's a left child
				leftChild = this.values[leftChildIdx]; // Retrieve left child value
				if (leftChild > element) {
					swap = leftChildIdx; // If left child is greater than the element, set swap index to left child's index
				}
			}

			if (rightChildIdx < length) {
				// If there's a right child
				rightChild = this.values[rightChildIdx]; // Retrieve right child value
				if (
					(swap === null && rightChild > element) || // If no swap with left child and right child greater than element
					(swap !== null && rightChild > leftChild) // Or if there's swap with left child but right child greater than left
				) {
					swap = rightChildIdx; // Set swap index to right child's index
				}
			}

			if (swap === null) break; // If no valid swaps, exit the loop

			// Perform the swap
			this.values[idx] = this.values[swap]; // Swap the current value with the selected child's value
			this.values[swap] = element; // Set the swapped child's value to the original element value
			idx = swap; // Update the index to the swapped child and continue the process
		}
	}
}

let heap = new MaxBinaryHeap();
heap.insert(55);

class Node {
	constructor(value, priority) {
		this.value = value;
		this.priority = priority;
	}
}

class PriorityQueue {
	constructor() {
		this.values = []; // An array that will store the nodes
	}

	// Method to insert a value with a given priority
	enqueue(value, priority) {
		let newNode = new Node(value, priority); // Create a new node
		this.values.push(newNode); // Add to the end
		// Bubble up based on priority
		let idx = this.values.length - 1;
		while (idx > 0) {
			let parentIdx = Math.floor((idx - 1) / 2);
			if (this.values[parentIdx].priority >= this.values[idx].priority) break;
			[this.values[parentIdx], this.values[idx]] = [
				this.values[idx],
				this.values[parentIdx],
			];
			idx = parentIdx;
		}
	}

	// Method to remove and return the value with the highest priority
	dequeue() {
		const max = this.values[0];
		const end = this.values.pop();
		if (this.values.length > 0) {
			this.values[0] = end;
			this.sinkDown();
		}
		return max ? max.value : null;
	}

	// Helper method to rearrange the heap after dequeue
	sinkDown() {
		let idx = 0;
		const length = this.values.length;
		const element = this.values[0];
		while (true) {
			const leftChildIdx = 2 * idx + 1;
			const rightChildIdx = 2 * idx + 2;
			let leftChild, rightChild;
			let swap = null;

			if (leftChildIdx < length) {
				leftChild = this.values[leftChildIdx];
				if (leftChild.priority > element.priority) {
					swap = leftChildIdx;
				}
			}

			if (rightChildIdx < length) {
				rightChild = this.values[rightChildIdx];
				if (
					(swap === null && rightChild.priority > element.priority) ||
					(swap !== null && rightChild.priority > leftChild.priority)
				) {
					swap = rightChildIdx;
				}
			}

			if (swap === null) break;
			this.values[idx] = this.values[swap];
			this.values[swap] = element;
			idx = swap;
		}
	}
}
