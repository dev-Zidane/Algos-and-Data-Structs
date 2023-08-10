class Graph {
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
	}

	addEdge(vertex1, vertex2) {
		this.adjacencyList[vertex1].push(vertex2);

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
}
