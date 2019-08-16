# eslint-config-mlint

[![Build Status](https://travis-ci.org/Mrminfive/eslint-config-mlint.svg?branch=master)](https://travis-ci.org/Mrminfive/eslint-config-mlint)

[![NPM](https://nodei.co/npm/eslint-config-mlint.png)](https://nodei.co/npm/eslint-config-mlint/)

English | [简体中文](./README-CN.md)

> ESLint Config for JavaScript、Typescript、Vue、React、Prettier

## Installation

Least dependence：

``` bash
$ npm install --save-dev eslint eslint-config-mlint eslint-plugin-import@^2.18.0
```

For the following types of projects, you also need to install these dependencies.

### Typescript

``` bash
$ npm install --save-dev @typescript-eslint/parser@^1.12.0 @typescript-eslint/eslint-plugin@^1.12.0 typescript@^3.5.3
```

### Vue

``` bash
$ npm install --save-dev eslint-plugin-vue@^5.2.3 vue-eslint-parser@^6.0.4
```

### React

``` bash
$ npm install --save-dev eslint-plugin-react@^7.4.0 eslint-plugin-react-hooks@^1.6.0
```

### Prettier

``` bash
$ npm install --save-dev prettier@^1.18.2 eslint-config-prettier@^6.0.0 eslint-plugin-prettier^3.1.0
```

## Usage

Once the `eslint-config-mlint` package is installed, you can use it by specifying `mlint` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  'extends': 'eslint-config-mlint',
  'rules': {
    // Additional, per-project rules...
  }
}
```

This package provides configuration for 9 different project types.

### For Es5

``` js
{
  'extends': 'eslint-config-mlint/es5'
}
```

This configuration is for older projects that use ES5 and previous versions of JS, all using ESLint native rules.

### For Es6

``` js
{
  'extends': 'eslint-config-mlint'
}
```

This configuration is for ES6 projects, using ESLint native rules and some of the rules of the [eslint-plugin-import][EslintPluginImport] plugin.

### For Typescript

``` js
{
  'extends': 'eslint-config-mlint/ts'
}
```

This configuration for Typescript projects inherits the above configuration of the ES6 project and enables some of the rules for the [@typescript-eslint/eslint-plugin][EslintPluginTypescript] plugin, using [@typescript-eslint/parser][EslintParserTypescript] as the parser.

### For Vue

``` js
{
  'extends': 'eslint-config-mlint/vue'
}
```

This configuration is for Vue's project, inherits the above configuration of the ES6 project, and enables some of the rules of the [eslint-plugin-vue][EslintPluginVue] plugin, using [vue-eslint-parser][VueEslintParser] as the parser.

### For React

``` js
{
  'extends': 'eslint-config-mlint/react'
}
```

This configuration for React projects inherits the above configuration of the ES6 project and enables some of the rules for the [eslint-plugin-react][EslintPluginReact] and [eslint-plugin-react-hooks][EslintPluginReactHooks] plugins.

### For Typescript + Vue

``` js
{
  'extends': 'eslint-config-mlint/ts-vue'
}
```

This configuration for Vue + Typescript projects inherits the above configuration for Vue projects and Typescript projects.

### For Typescript + React

``` js
{
  'extends': 'eslint-config-mlint/ts-react'
}
```

This configuration for React + Typescript projects inherits the above configuration for React projects and Typescript projects.

### For Prettier + Typescript

``` js
{
  'extends': 'eslint-config-mlint/prettier-ts'
}
```

This configuration for Prettier + Typescript projects inherits the above configuration of the Typescript project and inherits [eslint-config-prettier][EslintConfigPrettier] to disable partial conflict rules.


### For Prettier + Typescript + Vue

``` js
{
  'extends': 'eslint-config-mlint/prettier-ts-vue'
}
```

This configuration for Prettier + Typescript + Vue projects inherits the above configuration of the Typescript + Vue project and inherits [eslint-config-prettier][EslintConfigPrettier] to disable partial conflict rules.

## Editor integrations

See example:

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

## License

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
