module.exports = {
    extends: [
        'plugin:vue/recommended',
        require.resolve('eslint-config-ali/vue'),
        require.resolve('./rules/base.js')
    ],

    parser: 'vue-eslint-parser',

    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2019
    },

    plugins: [
        'vue'
    ],

    rules: {
        // 缩进
        'vue/html-indent': [
            'error',
            4,
            {
                attribute: 1,
                baseIndent: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: []
            }
        ],

        // 不允许多属性存在同一行
        'vue/max-attributes-per-line': 'error'
    }
}
