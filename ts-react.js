module.exports = {
    extends: [
        './index',
        './react',
        './ts'
    ].map(require.resolve),

    parser: 'vue-eslint-parser',

    parserOptions: {
        parser: '@typescript-eslint/parser',
        project: './tsconfig.json',
        extraFileExtensions: ['vue']
    },

    plugins: [
        '@typescript-eslint',
        'vue'
    ],

    rules: {
        // 声明的变量必须被使用
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                vars: 'all',
                varsIgnorePattern: '[(Vue|Vnode)]$',
                args: 'after-used',
                ignoreRestSiblings: true
            }
        ]
    }
}
