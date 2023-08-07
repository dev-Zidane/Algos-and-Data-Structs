class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	// BFS method
	bfs() {
		// List to store the result of BFS
		let result = [];

		// Queue to help in traversal
		let queue = [];

		// Starting from the root

		queue.push(this.root);

		while (queue.length) {
			// Removing the front node from the queue
			let currentNode = queue.shift();

			// Processing the current node
			result.push(currentNode);

			// If there's a left child, add it to the queue
			if (currentNode.left) {
				queue.push(currentNode.left);
			}

			// If there's a right child, add it to the queue
			if (currentNode.right) {
				queue.push(currentNode.right);
			}

			// Returning the BFS result
			return result;
		}
	}
}
