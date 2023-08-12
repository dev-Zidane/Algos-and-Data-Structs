class WeightedGraph {
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(vertex) {
		// If the vertex does not already exist in the adjacency list
		// Add the vertex with an empty array as its value
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
	}

	addEdge(vertex1, vertex2, weight) {
		// Add v2 to the adjacency list of v1
		this.adjacencyList[vertex1].push({ node: vertex2, weight });

		// Add v1 to the adjacency list of v2 (for an undirected graph)
		this.adjacencyList[vertex2].push({ node: vertex2, weight });
	}
	dijkstra(start, finish) {
		const nodes = new PriorityQueue(); // Priority Queue to manage vertices
		const distances = {}; // Store distances from the start vertex
		const previous = {}; // Store previous vertices
		let path = []; // Result path
		let smallest;

		// Build up initial state
		for (let vertex in this.adjacencyList) {
			if (vertex === start) {
				distances[vertex] = 0;
				nodes.enqueue(vertex, 0); // Enqueue start vertex with priority 0
			} else {
				distances[vertex] = Infinity;
				nodes.enqueue(vertex, Infinity); // Enqueue others with priority Infinity
			}
			previous[vertex] = null; // All previous vertices are null initially
		}

		// Loop as long as there is anything in the priority queue
		while (nodes.values.length) {
			smallest = nodes.dequeue().val; // Dequeue vertex with smallest distance
			if (smallest === finish) {
				// If we reached the finish, we are done
				while (previous[smallest]) {
					path.push(smallest);
					smallest = previous[smallest]; // Build up the path
				}
				break;
			}

			if (smallest || distances[smallest] !== Infinity) {
				for (let neighbour in this.adjacencyList[smallest]) {
					// Calculate new distance to neighboring node
					let candidate = distances[smallest] + nextNode.weight;
					// Get the neighboring node
					let nextNode = this.adjacencyList[smallest][neighbour];

					let nextNeighbour = nextNode.node;
					// If the new candidate distance is smaller
					if (candidate < distances[nextNeighbour]) {
						distances[nextNeighbour] = candidate; // Update the distance
						previous[nextNeighbour] = smallest; // Update previous vertex
						nodes.enqueue(nextNeighbour, candidate); // Enqueue in priority queue with new priority
					}
				}
			}
		}
		return path.concat(smallest).reverse(); // Return the path
	}
}

class PriorityQueue {
	constructor() {
		this.values = []; // Array to hold the values
	}

	// Method to enqueue a value with a given priority
	enqueue(val, priority) {
		this.values.push({ val, priority }); // Push the value and priority as an object
		this.sort(); // Sort the values array by priority
	}

	// Method to dequeue the value with the highest priority (lowest numerical value)
	dequeue() {
		return this.values.shift(); // Remove and return the first element, which has the highest priority after sorting
	}

	// Method to sort the values array by priority
	sort() {
		this.values.sort((a, b) => a.priority - b.priority); // Sort by comparing priority values
	}
}

let graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');
