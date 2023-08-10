// Define the Node class with value and priority
class Node {
	constructor(value, priority) {
		this.value = value;
		this.priority = priority;
		this.insertTime = Date.now(); // For handling FIFO with same priority
	}
}

// Priority Queue implemented using a Min Binary Heap
class PriorityQueue {
	constructor() {
		this.values = [];
	}

	// Enqueue method with bubbleUp
	enqueue(value, priority) {
		let newNode = new Node(value, priority);
		this.values.push(newNode);
		this.bubbleUp();
	}

	bubbleUp() {
		let idx = this.values.length - 1;
		const element = this.values[idx];
		while (idx > 0) {
			let parentIdx = Math.floor((idx - 1) / 2);
			let parent = this.values[parentIdx];

			// If element's priority is higher or equal but inserted later, stop
			if (
				element.priority > parent.priority ||
				(element.priority === parent.priority &&
					element.insertTime > parent.insertTime)
			)
				break;

			// Swap with parent
			this.values[parentIdx] = element;
			this.values[idx] = parent;
			idx = parentIdx;
		}
	}

	// Dequeue method with sinkDown
	dequeue() {
		const min = this.values[0];
		const end = this.values.pop();
		if (this.values.length > 0) {
			this.values[0] = end;
			this.sinkDown();
		}
		return min;
	}

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
				if (
					leftChild.priority < element.priority ||
					(leftChild.priority === element.priority &&
						leftChild.insertTime < element.insertTime)
				) {
					swap = leftChildIdx;
				}
			}

			if (rightChildIdx < length) {
				rightChild = this.values[rightChildIdx];
				if (
					(swap === null && rightChild.priority < element.priority) ||
					(swap !== null && rightChild.priority < leftChild.priority) ||
					(swap !== null &&
						rightChild.priority === leftChild.priority &&
						rightChild.insertTime < leftChild.insertTime)
				) {
					swap = rightChildIdx;
				}
			}

			if (swap === null) break;

			// Perform the swap
			this.values[idx] = this.values[swap];
			this.values[swap] = element;
			idx = swap;
		}
	}
}
