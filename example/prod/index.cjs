const hello0ts = require("../../dist/prod/index.js");
// const hello0ts = require("@heiwa4126/hello0-ts");

console.log(hello0ts.hello());

const h = new hello0ts.Hello2("test");
console.log(h.hello());
