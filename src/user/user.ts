export class User {
	constructor(public name: string, public password: string, public email: string) {}

	changeName(name: string) {
		this.name = name;
		return this;
	}

	changeEmail(email: string) {
		this.email = email;
		return this;
	}

	changePassword(password: string) {
		this.password = password;
		return this;
	}
}
