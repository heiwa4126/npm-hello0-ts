# 開発メモ

## 最初の使い方

レポジトリからクローンしたら

```sh
npm i
npm run example:dev
```

でサンプルが動く。

## このパッケージのポリシーのようなもの

- 開発中は .d.ts と sourceMap 付の ESModule としてトランスパイル。./dist/dev/ 以下に出る。
- 公開版は ESModule interop と.d.ts 付の CommonJS としてトランスパイル (他 skipLibCheck: true でライブラリの型チェックをスキップ)。./dist/prod/ 以下に出る。
- ./dist/dev/ の方は `__tests__` がある分、1 個レベルが深い (./dist/prod と比較してみて)

## このパッケージを作った手順

1. 作業ディレクトリ作る。`mkdir hello0-ts && cd hello0-ts`
1. `npm init -y` する
1. `npm i -D typescript @types/node jest @types/jest`
1. `npx tsc --init` で出来た tsconfig.json を修正
1. `npx jest --init` で出来た jest.config.js を修正
1. `./src` ディレクトリの下にモジュール書く。JSDoc も書く。様々な理由でプロジェクトのルートには書かないほうがいい(example/prod-ts 直下に index.ts 書いて気が付いた)。
1. `./__tests__` の下にテストコード書く。今回は jest で。
1. package.json を整える。
1. 余裕があったら example コードを書く

## 開発する手順

1. `npm run watch`
1. `./src/`の下で Typescript を書く。
1. `./__tests__/` にテストコードを書く。
1. watch が `./dist/dev` の下に `src/`と`__tests__/` を自動でトランスパイルしている。watch にエラーが出ていないなら `npm run test` でテストを実行する。
1. ときおり `npm run example:dev` で `./example/dev/index.mjs` を実行する。

以上を繰り返す。おおむね新しいバージョンができたな、と思ったら

1. package.json の "version" を増やす
1. `npm run build` で `./dist/prod` の下にトランスパイルする。
1. サンプルコードが 3 種類あるので

   - `npm run example:cjs`
   - `npm run example:mjs`
   - `npm run example:ts`

   で動かす。詳しくは package.json の scripts を見て。

## 発行の前にローカルでテストその 1

タイプ 1: グローバルに symlink

```sh
npm link
cd ..
mkdir test1 && cd test1 && npm init -y
npm link @heiwa4126/hello0-ts
cp -v ../hello0-ts/example/prod/index*.?js .
# index*.?js のimport文をパスから @heiwa4126/hello0-tsに書き換える
node index.mjs
```

タイプ 2: ローカルに symlink

```sh
cd ..
mkdir test2 && cd test2 && npm init -y
npm i file:../hello0-ts
cp -v ../hello0-ts/example/prod/index*.?js .
# index*.?js のimport文をパスから @heiwa4126/hello0-tsに書き換える
node index.mjs
```

どっちも一長一短あるので、状況によって使い分ける。

## 発行の前にローカルでテストその 2

プロジェクトのルートに戻って

```sh
npm pack
cd ..
mkdir test3 && cd test3 && npm init -y
npm i ../hello0-ts/heiwa4126-hello0-ts-1.0.0.tgz   # バージョンのところは随時変わる
cp -v ../hello0-ts/example/prod/index*.?js .
# index*.?js のimport文をパスから @heiwa4126/hello0-tsに書き換える
node index.mjs
```

これは 前のテストが symlink だったのに対して
「package.json の files に書いたファイルだけ、それも symlink でなくてコピー」という違いがある。

これは npmjs に上げた場合と同じ。

## npmjs に発行する

1. プロジェクトを GitHub に push する
1. [npmjs にサインアップする](https://www.npmjs.com/signup)
1. [npmjs にサインインする](https://www.npmjs.com/signin)

ブラウザは開いたままで

```sh
npm login   # 最初の1回だけ。URLが出るのでブラウザで開く
npm publish --access=public  # オプションが要るのは最初の1回だけ。以降は `npm publish` でOK。URLが出るのでブラウザで開く
```

## GitHub Packages

(未整理)

1. package.json ファイルに publishConfig セクションを追加します。このセクションでは、パッケージを公開するレジストリとして GitHub Packages を指定します:

   ```json
   "publishConfig": {
      "registry":"https://npm.pkg.github.com/"
   }
   ```

1. GitHub のユーザ名をパッケージ名の前に追加します(name フィールド)。例えば、あなたの GitHub ユーザ名が `heiwa4126` であれば:

   ```json
   "name": "@heiwa4126/npm-hello0-ts",
   ```

1. パッケージを公開します。まず、GitHub のパーソナルアクセストークンを使用して npm にログインします:

   ```sh
   npm login --registry=https://npm.pkg.github.com/
   ```

1. 次に、パッケージを公開します:
   ```sh
   npm publish
   ```

これらの手順を実行すると、パッケージは GitHub Packages に公開されます。

### GitHub Packages で公開したパッケージをインストールする方法は?

(ここも未整理)

1. .npmrc ファイルをプロジェクトのルートディレクトリに作成します(すでに存在する場合はそのまま使用します)。このファイルには、パッケージをインストールするレジストリとして GitHub Packages を指定します:

   ```config
   @heiwa4126:registry=https://npm.pkg.github.com/
   ```

   ここで、`@heiwa4126` はあなたの GitHub ユーザ名です。

1. 次に、通常の npm install コマンドを使用してパッケージをインストールします:

   ```sh
   npm install @heiwa4126/npm-hello0-ts
   ```

これにより、GitHub Packages からパッケージがインストールされます。

### GitHub Package のリポジトリが private な場合はどうしますか?

GitHub Packages のリポジトリがプライベートの場合でも、パッケージをインストールすることは可能です。ただし、そのためには GitHub のパーソナルアクセストークンが必要となります。このトークンは、パッケージを読み取る権限を持つ必要があります。

以下の手順でパッケージをインストールします:

1. GitHub でパーソナルアクセストークンを生成します。これは [GitHub の設定ページ](https://github.com/settings/tokens) から行うことができます。トークンには read:packages のスコープを含める必要があります。

2. 生成したトークンを使用して、npm にログインします:

   ```sh
   npm login --registry=https://npm.pkg.github.com/ --scope=@heiwa4126
   ```

   ここで、`@heiwa4126` はあなたの GitHub ユーザ名です。プロンプトが表示されたら、GitHub のユーザ名とパーソナルアクセストークンを入力します。

3. 通常の npm install コマンドを使用してパッケージをインストールします:

   ```sh
   npm install @heiwa4126/npm-hello0-ts
   ```

これにより、プライベートな GitHub Packages からパッケージがインストールされます。
