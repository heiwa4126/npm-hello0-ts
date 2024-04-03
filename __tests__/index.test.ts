import { hello, Hello2 } from "../src/index";

describe("hello", () => {
  it("should return 'hello'", () => {
    const result = hello();
    expect(result).toBe("hello");
  });
});

describe("Hello2", () => {
  let hello2: Hello2;

  beforeEach(() => {
    hello2 = new Hello2("Dolly");
  });

  it("should return the correct greeting", () => {
    const result = hello2.hello();
    expect(result).toBe("hello, Dolly");
  });
});
