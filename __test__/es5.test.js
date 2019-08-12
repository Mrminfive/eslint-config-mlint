
const eslint = require('eslint')
const assert = require('assert')
const { isObject, resolvePath } = require('./utils')

describe('Test eslint-config-mlint/es5', () => {
    const cli = new eslint.CLIEngine({
        configFile: resolvePath('../es5.js'),
        useEslintrc: false,
        ignore: false
    })

    it('Validate es5', () => {
        const filePath = resolvePath('./fixtures/es5.js')

        /**
         * 验证配置文件
         */
        const config = cli.getConfigForFile(filePath)
        assert.ok(isObject(config))

        const reports = cli.executeOnFiles([filePath])
        assert.ok(reports.errorCount === 1 && reports.warningCount === 0)
    })
})
