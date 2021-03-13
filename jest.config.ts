import { Config } from "@jest/types";

// Sync object
const config: Config.InitialOptions = {
	verbose: true,
	preset: "ts-jest",
	testEnvironment: "node",
	setupFiles: ["dotenv/config"],
};

export default config;
