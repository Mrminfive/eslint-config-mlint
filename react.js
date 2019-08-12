module.exports = {
    extends: [
        'eslint-config-ali/react',
        './rules/base.js'
    ].map(require.resolve),

    rules: {
        // JSX 语法使用 4 个空格缩进
        'react/jsx-indent-props': ['error', 4],
    }
}
