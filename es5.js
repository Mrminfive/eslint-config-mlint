module.exports = {
    extends: [
        'eslint-config-ali/es5',
        './rules/base.js'
    ].map(require.resolve)
}
