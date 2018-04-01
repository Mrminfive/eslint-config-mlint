# eslint-config-mfe

[![Build Status](https://travis-ci.org/Mrminfive/eslint-config-mlint.svg?branch=master)](https://travis-ci.org/Mrminfive/eslint-config-mlint)

> ESLint Config for JavaScript

## Installation

``` shell
$ npm install --save-dev eslint eslint-config-mlint babel-eslint
```

## Usage

Once the `eslint-config-mlint` package is installed, you can use it by specifying `mlint` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  "extends": "mlint",
  "rules": {
    // Additional, per-project rules...
  }
}
```

## License

MIT License

Copyright (c) 2018 minfive