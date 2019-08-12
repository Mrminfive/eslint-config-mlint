module.exports = {
    extends: [
        require.resolve('./ts'),
        'prettier',
        'prettier/@typescript-eslint'
    ],

    plugins: [
        'prettier'
    ],

    rules: {
        'prettier/prettier': 'error'
    }
}
