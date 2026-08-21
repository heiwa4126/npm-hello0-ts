/// <reference types="jest" />

import { hello } from "../../src/lib/hello";

describe("hello", () => {
	it("should return 'hello'", () => {
		const result = hello();
		expect(result).toBe("hello");
	});
});
