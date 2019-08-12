
const eslint = require('eslint')
const assert = require('assert')
const { isObject, resolvePath } = require('./utils')

describe('Test eslint-config-mlint/vue', () => {
    const cli = new eslint.CLIEngine({
        configFile: resolvePath('../vue.js'),
        useEslintrc: false,
        ignore: false
    })

    it('Validate es6', () => {
        const filePath = resolvePath('./fixtures/index.js')

        /**
         * 验证配置文件
         */
        const config = cli.getConfigForFile(filePath)
        assert.ok(isObject(config))

        const reports = cli.executeOnFiles([filePath])
        assert.ok(reports.errorCount === 3 && reports.warningCount === 1)
    })

    it('Validate vue single file components', () => {
        const filePath = resolvePath('./fixtures/vue.vue')

        /**
         * 验证配置文件
         */
        const config = cli.getConfigForFile(filePath)
        assert.ok(isObject(config))

        const reports = cli.executeOnFiles([filePath])
        assert.ok(reports.errorCount === 0 && reports.warningCount === 0)
    })

    it('Validate vue jsx components', () => {
        const filePath = resolvePath('./fixtures/vue.jsx')

        /**
         * 验证配置文件
         */
        const config = cli.getConfigForFile(filePath)
        assert.ok(isObject(config))

        const reports = cli.executeOnFiles([filePath])
        assert.ok(reports.errorCount === 0 && reports.warningCount === 0)
    })
})
