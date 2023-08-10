class HashTable {
	constructor(size = 53) {
		this.keyMap = new Array(size);
	}

	// Hash function (implementation depends on specific hashing approach)
	_hash(key) {
		let total = 0;
		let PRIME = 31;
		for (let i = 0; i < Math.min(key.length, 100); i++) {
			let char = key[i];
			let value = char.charCodeAt(0) - 96;
			total = (total * PRIME + value) % this.keyMap.length;
		}
		return total;
	}

	// Set a key-value pair
	set(key, value) {
		const index = this._hash(key); // Hash the key to get the index

		if (!this.keyMap[index]) {
			this.keyMap[index] = [];
		}
		this.keyMap[index].push([key, value]);
	}

	get(key) {
		const index = this._hash(key); // Hash the key to get the index
		if (!this.keyMap[index]) return undefined; // Return undefined if index not found

		// Search through the key-value pairs at the index
		for (let i = 0; i < this.keyMap[index].length; i++) {
			if (this.keyMap[index][i][0] === key) {
				return this.keyMap[index][i][1]; // Return the value if key found
			}
		}
		return undefined; // Return undefined if key not found
	}

	keys() {
		const keysArray = [];

		for (let i = 0; i < this.keyMap.length; i++) {
			if (this.keyMap[i]) {
				for (let j = 0; j < thiskeyMap[i].length; j++) {
					keysArray.push(thiskeyMap[i][0]);
				}
			}
		}
		return keysArray;
	}

	values() {
		const valuesArray = [];
		const uniqueValues = new Set();

		for (let i = 0; i < this.keyMap.length; i++) {
			if (this.keyMap[i]) {
				for (let j = 0; j < this.keyMap[i].length; j++) {
					if (!uniqueValues.has(thiskeyMap[i][j][1])) {
						valuesArray.push(this.keyMap[i][j][1]);
						uniqueValues.add(this.keyMap[i][j][1]);
					}
				}
			}
		}
		return valuesArray;
	}
}
