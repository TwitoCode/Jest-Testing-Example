import { Document, model, Schema } from "mongoose";

export interface User extends Document {
	email: string;
	password: string;
}

export const UserSchema = new Schema<User>({
  name: String,
  password: String
});

export const UserModel = model<User>("jest-testing-user", UserSchema);
