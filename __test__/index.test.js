
const eslint = require('eslint')
const assert = require('assert')
const { isObject, resolvePath } = require('./utils')

describe('Test eslint-config-mlint', () => {
    const cli = new eslint.CLIEngine({
        configFile: resolvePath('../index.js'),
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
})
