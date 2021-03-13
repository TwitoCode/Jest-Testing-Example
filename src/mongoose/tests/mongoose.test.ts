// import "dotenv/config";
import mongoose from "mongoose";
import { UserModel } from "../../user/user.model";

describe("Mongoose Tests", () => {
	beforeAll((done) => {
		mongoose.connect(process.env.MONGO!, {
			useUnifiedTopology: true,
			useCreateIndex: true,
			useNewUrlParser: true,
		});

		mongoose.connection.on("open", () => done());
		mongoose.connection.on("err", (err) => done.fail(err));
	});

	afterAll((done) => {
		// return done();

		mongoose.connection
			.collection("jest-testing-users")
			.deleteMany({})
			.then(() => done())
			.catch((err) => done.fail(err));
	});

	it("Should create a user document", async (done) => {
		//Promise Based

		// UserModel.create({ password: "twilight123", email: "toheebeji@gmail.com" })
		// 	.then((user) => {
		// 		expect(user).toBeTruthy();
		// 		done();
		// 	})
		// 	.catch((err) => done.fail(err));

		//Async Await
		try {
			const user = await UserModel.create({ password: "twilight123", email: "toheebeji@gmail.com" });

			expect(user).toBeTruthy();
			done();
		} catch (err) {
			done.fail(err);
		}
	});
});
