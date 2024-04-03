import { Hello2 } from "../../src/lib/hello2";

describe("Hello2", () => {
  let hello2: Hello2;

  beforeEach(() => {
    hello2 = new Hello2("world");
  });

  it("should return the correct greeting", () => {
    const result = hello2.hello();
    expect(result).toBe("hello, world");
  });
});
