const h0 = require("../../dist/prod/index.js");
// const h0 = require("@heiwa4126/hello0-ts");

console.log(h0.hello());

const h = new h0.Hello2("test");
console.log(h.hello());
