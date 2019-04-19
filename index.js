
module.exports = {
    root: true,

    parser: 'babel-eslint',

    parserOptions: {
        ecmaVersion: 8,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            experimentalObjectRestSpread: true,
            modules: true
        }
    },

    env: {
        browser: true,
        node: true,
        es6: true,
        commonjs: true
    },
    
    rules: require('./rules.js')
};