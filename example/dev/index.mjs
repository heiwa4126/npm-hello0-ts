import { hello, Hello2 } from "../../dist/dev/src/index.js";
// import { hello, Hello2 } from "@heiwa4126/hello0-ts"

console.log(hello());

const h = new Hello2("test");
console.log(h.hello());
