module.exports = {
    extends: [
        require.resolve('./index'),
        'plugin:@typescript-eslint/recommended'
    ],

    parser: '@typescript-eslint/parser',

    parserOptions: {
        sourceType: 'module',
        project: './tsconfig.json'
    },

    plugins: [
        '@typescript-eslint'
    ],

    rules: {
        ...require('./rules/ts')
    },

    overrides: [
        {
            files: [
                '*.js'
            ],
            rules: {
                '@typescript-eslint/no-var-requires': 'off'
            }
        }
    ]
}
