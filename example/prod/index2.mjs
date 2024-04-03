import * as hello0ts from "../../dist/prod/index.js";

console.log(hello0ts.hello());

const h = new hello0ts.Hello2("test");
console.log(h.hello());
