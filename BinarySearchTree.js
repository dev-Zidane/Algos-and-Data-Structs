class Node {
	constructor(value) {
		this.values = value; // Value of the node
		this.left = null; // Reference to the left child
		this.right = null; // Reference to the right child
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null; // The tree starts empty
	}

	insert(value) {
		let newNode = new Node(value); // Create a new node with the given value

		if (!this.root) {
			// If the tree doesn't have a root

			this.root = newNode; // Make the new node the root
			return this;
		}

		let currentRoot = this.root; // Start at the root

		while (true) {
			if (value === currentRoot) return undefined; // Ignore duplicates

			if (value < currentRoot.value) {
				// If the value is less than the current node's value

				if (!currentRoot.left) {
					// And if there's no left child

					currentRoot.left = newNode; // Place the new node as the left child
					return this;
				}
				currentRoot = currentRoot.left; // If there's a left child, move to it and continue
			} else {
				if (!currentRoot.right) {
					// And if there's no right child

					currentRoot.right = newNode; // Place the new node as the right child
					return this;
				}
				currentRoot = currentRoot.right; // If there's a right child, move to it and continue
			}
		}
	}
}

let tree = new BinarySearchTree();
tree.root = new Node(10);

tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);
