# npm-hello0-ts (@heiwa4126/hello0-ts)

## 概要

## 実行例

### CommonJS

```javascript
const hello0ts = require("@heiwa4126/hello0-ts");

console.log(h0.hello());

const h = new h0.Hello2("test");
console.log(h.hello());
```

### ESModule and TypeScript

```javascript
import hello0 from "@heiwa4126/hello0";

console.log(hello0.hello.hello());

const h = new hello0.hello2.Hello("test");
console.log(h.hello());
```

## このパッケージを作った手順

1. 作業ディレクトリ作る。`mkdir hello0 && cd hello0`
1. `pnpm init` する (pnpm はお好みで yarn でも npm でも)
1. lib ディレクトリの下にモジュール書く。JSDoc も書く
1. `./__tests__` の下にテストコード書く。今回は jest 使った。`pnpm i -D jest`
1. package.json の"main"に設定されている`./index.js` にモジュールの export 追加する
1. package.json の "scripts" を整える
1. `pnpm run test` ぐらいはしておく
1. 余裕があったら example コードを書く

## ローカルな使い方 1

使う側で `npm i {ここへのパス}`

パスは絶対でも相対でもいいみたい。`npm link`に比べてこっちのほうが使いやすいと思う。
example/ 以下に含めて、実行可能にするなららこっちがいいと思う(微妙)。

package.json は

```json
  "dependencies": {
    "@heiwa4126/hello0": "file:../.."
  }
```

みたいになる。pnpm `pnpm i ../..` で package.json は "link:../.." になるが、
それだと`npm i`で処理できない。

## ローカルな使い方 2

`pnpm link -g` または `npm link` で グローバルにリンクをはる。

使う側で `npm link {モジュール名}`

使い勝手に難がある。package.json の dependencies に書かれない。

あと `npm unlink` は無いので

```bash
cd "$(npm config get prefix)/lib/node_modules"
```

して該当 symlink を rm すること。
pnpm は `pnpm uninstall -g` があります。

## 感想

ESModule と Typescript 用に .d.ts を書かなきゃならないのが面倒
