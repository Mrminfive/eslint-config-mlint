module.exports = {
    extends: [
        'eslint-config-ali/es6',
        './rules/base.js'
    ].map(require.resolve)
}
