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
		// Step 1: Remove all edges connecting the vertex to others
		// Iterate through the adjacency list for the vertex
		while (this.adjacencyList[vertex].length) {
			// Remove each connected vertex by calling the previously defined removeEdge method
			const adjacentVertex = this.adjacencyList[vertex].pop();
			this.removeEdge(vertex, adjacentVertex);
		}
		// Step 2: Delete the entry for the vertex itself
		delete this.adjacencyList[vertex];
	}

	dfsRecursive(start) {
		// Result array to store the order of traversal
		const result = [];
		// Object to store visited vertices
		let visited = {};
		// Alias adjacencyList so that it can be accessed within the helper function
		const adjacencyList = this.adjacencyList;

		// Helper function to perform the recursion
		(function dfs(vertex) {
			// If the vertex is null or undefined, return
			if (!vertex) return null;
			// Mark the vertex as visited
			visited[vertex] = true;
			// Add the vertex to the result array
			result.push(vertex);

			// Visit all neighbors that have not been visited
			for (vertex in adjacencyList) {
				if (!visited[vertex]) {
					return dfs(vertex);
				}
			}
		})(start); // Immediately invoke the dfs function with the start vertex
		return result; // Return the result array
	}

	// Iterative DFS method
	dfsIterative(start) {
		// Create a stack and push the starting vertex onto it
		const stack = [start];

		// Create a result array to store the order of traversal
		const result = [];

		// Create an object to store visited vertices
		const visited = { [start]: true };

		let currentVertex;

		// Continue as long as there are vertices on the stack
		while (stack.length) {
			// Pop a vertex from the stack
			currentVertex = stack.pop();

			// Add it to the result array
			result.push(currentVertex);

			// Visit all neighbors of the current vertex
			this.adjacencyList[currentVertex].forEach((neighbour) => {
				if (!visited[neighbour]) {
					visited[neighbour] = true;
					// Mark the neighbor as visited
					result.push(neighbour);
					// Add the neighbor to the stack
					stack.push(neighbour);
				}
			});
			return result;
		}
	}

	// BFS method
	bfs(start) {
		// Create a queue and enqueue the starting vertex
		const queue = [start];
		// Create a result array to store the order of traversal
		const result = [];
		// Create an object to store visited vertices
		const visited = { [start]: true };

		let currentVertex;

		// Continue as long as there are vertices in the queue
		while (queue.length) {
			// Dequeue a vertex from the queue
			currentVertex = queue.shift();
			// Add it to the result array
			result.push(currentVertex);

			// Visit all neighbors of the current vertex
			this.adjacencyList[currentVertex].forEach((neighbour) => {
				if (!visited[neighbour]) {
					// Mark the neighbor as visitedgit
					visited[neighbour] = true;
					// Enqueue the neighbor
					queue.push(neighbour);
				}
			});
		}
		return result;
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
