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
}

let heap = new MaxBinaryHeap();
heap.insert(55);
