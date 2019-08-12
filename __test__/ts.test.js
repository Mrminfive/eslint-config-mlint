
const eslint = require('eslint')
const assert = require('assert')
const { isObject, resolvePath } = require('./utils')

describe('Test eslint-config-mlint/ts', () => {
    const cli = new eslint.CLIEngine({
        configFile: resolvePath('../ts.js'),
        useEslintrc: false,
        ignore: false,
        parserOptions: {
            project: resolvePath('./fixtures/tsconfig.ts.json')
        }
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

    it('Validate typescript', () => {
        const filePath = resolvePath('./fixtures/ts.ts')

        /**
         * 验证配置文件
         */
        const config = cli.getConfigForFile(filePath)
        assert.ok(isObject(config))

        const reports = cli.executeOnFiles([filePath])

        assert.ok(reports.errorCount === 2 && reports.warningCount === 1)
    })
})
