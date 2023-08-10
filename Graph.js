class Graph {
	constructor() {
		// Initializing the adjacency list as an empty object
		this.adjacencyList = {};
	}

	// Method to add a vertex to the graph
	addVertex(vertex) {
		// If the vertex does not already exist in the adjacency list
		// Add the vertex with an empty array as its value
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
	}

	// Method to add an edge between vertices v1 and v2
	addEdge(vertex1, vertex2) {
		// Add v2 to the adjacency list of v1
		this.adjacencyList[vertex1].push(vertex2);

		// Add v1 to the adjacency list of v2 (for an undirected graph)
		this.adjacencyList[vertex2].push(vertex1);
	}

	// Method to remove an edge between vertices v1 and v2
	removeEdge(v1, v2) {
		// Remove v2 from the adjacency list of v1 by filtering it out
		this.adjacencyList[v1] = this.adjacencyList[v1].filter(
			(vertex) => vertex !== v2
		);
		// Remove v1 from the adjacency list of v2 by filtering it out
		this.adjacencyList[v2] = this.adjacencyList[v2].filter(
			(vertex) => vertex !== v1
		);
	}

	// Method to remove a vertex and all its edges from the graph
	removeVertex(vertex) {
		// Loop through the adjacency list of the vertex to remove
		while (this.adjacencyList[vertex].length) {
			// Remove each edge connected to the vertex
			const adjacentVertex = this.adjacencyList[vertex].pop();
			this.removeEdge(vertex, adjacentVertex);
		}
		// Finally, delete the vertex itself
		delete this.adjacencyList[vertex];
	}
}
