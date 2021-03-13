import { Calculator } from "./../calculator";

describe("Calculator Class Tests", () => {
	it("Should divide 10 by 5 to equal 2", () => {
		expect(Calculator.divide(10, 5)).toBe(2);
	});

	it("Should multiply 10 by 5 to equal 50", () => {
		expect(Calculator.multiply(10, 5)).toBe(50);
	});

	it("Should subtract 5 from 10 to equal 5", () => {
		expect(Calculator.subtract(10, 5)).toBe(5);
	});

	it("Should add 10 with 5 to equal 15", () => {
		expect(Calculator.add(10, 5)).toBe(15);
	});
});
