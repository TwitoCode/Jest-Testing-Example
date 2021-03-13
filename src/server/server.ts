import express from "express";
import { User } from "../user/user";

export const app = express();

app.use(express.json());

app.post("/user", (req, res) => {
	const user = req.body;
	const newUser = new User(user.name, user.password, user.email);

	res.send(newUser);
});
