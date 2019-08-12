module.exports = {
    extends: [
        require.resolve('./ts-vue'),
        'prettier',
        'prettier/@typescript-eslint'
    ],

    plugins: [
        'prettier'
    ],

    rules: {
        // 关闭 pietter 规则，避免与 vue 相关配置冲突
        // 'prettier/prettier': 'error',

        // 标签闭合处理
        'vue/html-self-closing': [
            'error',
            {
                html: {
                    void: 'any'
                }
            }
        ]
    }
}
