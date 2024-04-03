/**
 * Represents a Hello2 object.
 */
export class Hello2 {
  private value: string;

  /**
   * Creates a new instance of the Hello2 class.
   * @param v - The value to be assigned.
   */
  constructor(v: string) {
    this.value = v;
  }

  /**
   * Returns a greeting message.
   * @returns The greeting message.
   */
  hello() {
    return "hello, " + this.value;
  }
}
