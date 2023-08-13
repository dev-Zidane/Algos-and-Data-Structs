//Unoptimized solution
function fibonacci(n) {
	if (n <= 1) return n; // Base cases: if n is 0 or 1, return n
	return fibonacci(n - 1) + fibonacci(n - 2); // Recursive calls for n-1 and n-2, then summing them
}

// Optimized soultion with Memoization

function fibonacci(n, memo = {}) {
	if (n in memo) return memo[n]; // If result is in memo, return it
	if (n <= 1) return n; // Base cases: if n is 0 or 1, return n
	memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo); // Recursive calls with memoization
	return memo[n]; // Return the result for n
}

//Tabulation method
function fibonacci(n) {
	if (n <= 1) return n; // Base cases: if n is 0 or 1, return n
	let table = new Array(n + 1); // Initialize a table with n + 1 entries
	table[0] = 0; // Base case: F(0) = 0
	table[1] = 1; // Base case: F(1) = 1
	for (let i = 2; i <= n; i++) {
		// Iterate from 2 to n
		table[i] = table[i - 1] + table[i - 2]; // Fill in the table using previous entries
	}
	return table[n]; // Return the result for n
}
