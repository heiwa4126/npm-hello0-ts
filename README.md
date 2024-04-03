# npm-hello0-ts (@heiwa4126/hello0-ts)

## Overview (概要)

A sample project written in Typescript that can be published on npmjs as a package compatible with CommonJS, ES Modules (and Typescript). Can be used as a template.

Ultimately, it will be transpiled into CommonJS with .d.ts files and with ES Module interop.

(Japanese translation)

Typescript で書いて、CommonJS と ESModule(と Typescript)で使えるパッケージとして npmjs に発行できるサンプルプロジェクト。テンプレートとして使う。

最終的には ESModule interop と.d.ts 付の CommonJS としてトランスパイルされる。

## examples (実行例)

### CommonJS

```javascript
const h0 = require("@heiwa4126/hello0-ts");

console.log(h0.hello());

const h = new h0.Hello2("test");
console.log(h.hello());
```

### ESModule and TypeScript

```javascript
import * as h0 from "@heiwa4126/hello0-ts";

console.log(h0.hello());

const h = new h0.Hello2("test");
console.log(h.hello());
```

or

```javascript
import { hello, Hello2 } from "@heiwa4126/hello0-ts";

console.log(hello());

const h = new Hello2("test");
console.log(h.hello());
```

## 開発

[DEVELOP.md](DEVELOP.md) 参照
