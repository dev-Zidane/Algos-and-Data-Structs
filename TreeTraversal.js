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
			g;

			// Returning the BFS result
			return result;
		}
	}

	// Pre-Order Traversal method
	preOrder() {
		let visited = []; // Create an array to store the visited nodes' values.

		let current = this.root; // Start from the root of the tree.

		function traverse(node) {
			if (!node) return; // If the node is null, return (base case).

			visited.push(node.value); // Push the current node's value to the visited array.

			if (node.left) traverse(node.left); // If the current node has a left child, traverse it.

			if (node.right) traverse(node.right); // If the current node has a right child, traverse it.
		}

		traverse(current); // Start the traversal with the root node.

		return visited; // Return the visited nodes' values.
	}

	// Post-Order Traversal method
	postOrder() {
		let data = []; // Create an array to store the visited nodes' values.

		let current = this.root; // Start from the root of the tree.

		function traverse(node) {
			if (!node) return; // If the node is null, return (base case).

			if (node.left) traverse(node.left); // If the current node has a left child, traverse it.

			if (node.right) traverse(node.right); // If the current node has a right child, traverse it.

			data.push(node.value); // Push the current node's value to the data array.
		}

		traverse(current); // Start the traversal with the root node.

		return data; // Return the visited nodes' values.
	}
}
