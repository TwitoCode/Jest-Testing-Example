import request from "supertest";
import { app } from "../server";
import { User } from "./../../user/user";

jest.useFakeTimers();

describe("Server Tests", () => {
	const name = "Twito";
	const password = "twilight123";
	const email = "twito@gmail.com";

	const user = new User(name, password, email);

	it('"POST /user" should send a new User', async () => {
		const res = await request(app).post("/user").send(user).expect(200);
		expect(res.body).toEqual(user);
	});

	it('"POST /user" should not send a new User', async () => {
		const res = await request(app).post("/user").send(user).expect(200);
		expect(res.body).not.toEqual(false);
	});
});
