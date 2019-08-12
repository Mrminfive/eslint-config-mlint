# eslint-config-mlint

[![Build Status](https://travis-ci.org/Mrminfive/eslint-config-mlint.svg?branch=master)](https://travis-ci.org/Mrminfive/eslint-config-mlint)

[![NPM](https://nodei.co/npm/eslint-config-mlint.png)](https://nodei.co/npm/eslint-config-mlint/)

[English](./README.md) | 简体中文

> JavaScript、Typescript、Vue、React、Prettier 的 ESLint Config

## 安装

基本依赖：

``` shell
$ npm install --save-dev eslint eslint-config-mlint eslint-plugin-import@^2.18.0
```

对于以下类型的项目，还需要安装这些依赖项：

### Typescript

``` shell
$ npm install --save-dev @typescript-eslint/parser@^1.12.0 @typescript-eslint/eslint-plugin@^1.12.0 typescript@^3.5.3
```

### Vue

``` shell
$ npm install --save-dev eslint-plugin-vue@^5.2.3 vue-eslint-parser@^6.0.4
```

### React

``` shell
$ npm install --save-dev eslint-plugin-react@^7.4.0 eslint-plugin-react-hooks@^1.6.0
```

### Prettier

``` shell
$ npm install --save-dev prettier@^1.18.2 eslint-config-prettier@^6.0.0
```

## Usage

一旦安装了 `eslint-config-mlint` 包，就可以通过在 [ESLint 配置](http://eslint.org/docs/user-guide/configuring) 的 [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) 部分指定`mlint` 来使用它。

```js
{
  'extends': 'mlint',
  'rules': {
    // Additional, per-project rules...
  }
}
```

该包提供 9 种不同项目类型的配置。

### 对于 Es5 项目

``` js
{
  'extends': 'eslint-config-mlint/es5'
}
```

这份配置针对使用 ES5 及之前版本 JS 的老项目，全部使用 ESLint 原生规则。

### 对于 Es6 项目

``` js
{
  'extends': 'eslint-config-mlint'
}
```

这份配置针对 ES6 项目，使用 ESLint 原生规则和部分 [eslint-plugin-import][EslintPluginImport] 插件的规则。

### 对于 Typescript 项目

``` js
{
  'extends': 'eslint-config-mlint/ts'
}
```

这份配置针对 Typescript 的项目，继承了上面对 ES6 项目的配置，并启用了部分 [@typescript-eslint/eslint-plugin][EslintPluginTypescript] 插件的规则，使用 [@typescript-eslint/parser][EslintParserTypescript] 作为 parser。

### 对于 Vue 项目

``` js
{
  'extends': 'eslint-config-mlint/vue'
}
```

这份配置针对 Vue 的项目，继承了上面对 ES6 项目的配置，并启用了部分 [eslint-plugin-vue][EslintPluginVue] 插件的规则，使用 [vue-eslint-parser][VueEslintParser] 作为 parser。

### 对于 React 项目

``` js
{
  'extends': 'eslint-config-mlint/react'
}
```

这份配置针对 React 的项目，继承了上面对 ES6 项目的配置，并启用了部分 [eslint-plugin-react][EslintPluginReact] 和 [eslint-plugin-react-hooks][EslintPluginReactHooks] 插件的规则。

### 对于 Typescript + Vue 项目

``` js
{
  'extends': 'eslint-config-mlint/ts-vue'
}
```

这份配置针对 Vue + Typescript 的项目，继承了上面对 Vue 项目和 Typescript 项目的配置。

### 对于 Typescript + React 项目

``` js
{
  'extends': 'eslint-config-mlint/ts-react'
}
```

这份配置针对 React + Typescript 的项目，继承了上面对 React 项目和 Typescript 项目的配置。

### 对于 Prettier + Typescript 项目

``` js
{
  'extends': 'eslint-config-mlint/prettier-ts'
}
```

这份配置正对 Prettier + Typescript 项目，继承了上面对于 Typescript 项目的配置，并继承了 [eslint-config-prettier][EslintConfigPrettier] 以禁用部分冲突的规则。

### 对于 Prettier + Typescript + Vue 项目

``` js
{
  'extends': 'eslint-config-mlint/prettier-ts-vue'
}
```

这份配置正对 Prettier + Typescript + Vue 项目，继承了上面对于 Typescript + Vue 项目的配置，并继承了 [eslint-config-prettier][EslintConfigPrettier] 以禁用部分冲突的规则。

## 编辑器集成

参见例子:

* [Es5](./__example__/es5/REAMDE.md)
* [Es6](./__example__/es6/REAMDE.md)
* [Typescript](./__example__/typescript/REAMDE.md)
* [Vue](./__example__/vue/REAMDE.md)
* [React](./__example__/react/REAMDE.md)
* [Typescript + Vue](./__example__/typescript-vue/REAMDE.md)
* [Typescript + React](./__example__/typescript-react/REAMDE.md)
* [Prettier + Typescript](./__example__/prettier-typescript/REAMDE.md)
* [Prettier + Typescript + Vue](./__example__/prettier-typescript-vue/REAMDE.md)
* [Prettier + Typescript + React](./__example__/prettier-typescript-react/REAMDE.md)

## 执照

MIT License

Copyright (c) 2019 minfive

[EslintPluginImport]: https://www.npmjs.com/package/eslint-plugin-import
[EslintPluginVue]: https://www.npmjs.com/package/eslint-plugin-vue
[VueEslintParser]: https://www.npmjs.com/package/vue-eslint-parser
[EslintPluginReact]: https://www.npmjs.com/package/eslint-plugin-react
[EslintPluginReactHooks]: https://www.npmjs.com/package/eslint-plugin-react-hooks
[EslintPluginTypescript]: https://www.npmjs.com/package/@typescript-eslint/eslint-plugin
[EslintParserTypescript]: https://www.npmjs.com/package/@typescript-eslint/parser
[EslintConfigPrettier]: https://www.npmjs.com/package/eslint-config-prettier
