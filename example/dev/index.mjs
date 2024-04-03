//import { hello, Hello2 } from "../../dist/dev/index.js";
import { hello, Hello2 } from "../../dist/cjs/index.js";
// import { hello, Hello2 } from "@heiwa4126/hello0-ts"

console.log(hello());

const h = new Hello2("test");
console.log(h.hello());
