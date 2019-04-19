
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

    extends: ['./rules.js']
};
