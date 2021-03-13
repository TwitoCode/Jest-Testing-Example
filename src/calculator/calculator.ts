export class Calculator {
	static add(...numbers: number[]): number {
		let output = numbers[0];

		numbers.forEach((n, i) => {
			if (i === 0) return;
			return (output += n);
		});

		return output;
	}

	static subtract(...numbers: number[]): number {
		let output = numbers[0];

		numbers.forEach((n, i) => {
			if (i === 0) return;
			return (output -= n);
		});

		return output;
	}

	static multiply(...numbers: number[]): number {
		let output = numbers[0];

		numbers.forEach((n, i) => {
			if (i === 0) return;
			return (output *= n);
		});

		return output;
	}

	static divide(...numbers: number[]): number {
		let output = numbers[0];

		numbers.forEach((n, i) => {
			if (i === 0) return;
			if (n === 0) throw new Error("Cannot divide by 0");

			return (output /= n);
		});

		return output;
	}
}
