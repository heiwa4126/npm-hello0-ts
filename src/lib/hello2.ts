export class Hello2 {
  private value: string;

  constructor(v: string) {
    this.value = v;
  }

  hello() {
    return "hello, " + this.value;
  }
}
