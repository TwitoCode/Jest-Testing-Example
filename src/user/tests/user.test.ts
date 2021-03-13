import { User } from "../user";

describe("User Class Tests", () => {
	const user = new User("Twito", "twilight123", "toheebeji@gmail.com");

	it("changes name to Robert", () => {
		expect(user.changeName("Robert").name).toBe("Robert");
		expect(user.changeName("Robert").name).not.toBe("Twito");
	});

	it("changes email to twilight@gmail.com", () => {
		expect(user.changeEmail("twilight@gmail.com").email).toBe("twilight@gmail.com");
		expect(user.changeEmail("twilight@gmail.com").email).not.toBe("toheebeji@gmail.com");
	});
});
