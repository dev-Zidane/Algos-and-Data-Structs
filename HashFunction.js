// Simple hash function to translate keys into array indices
function hash(key, arrayLen) {
	let total = 0; // Initialize the total value
	const PRIME = 31;

	// Iterate through the characters of the key, but only up to the first 100 characters
	for (let i = 0; i < Math.min(key.length, 100); i++) {
		let char = key[i];
		// Iterate through the key
		let value = char.charCodeAt(0) - 96; // Convert character to a value
		total = (total * PRIME + value) % arrayLen; // Use prime number and combine with previous total
	}
	return total; // Return the index
}
