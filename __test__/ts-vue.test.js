
const eslint = require('eslint')
const assert = require('assert')
const { isObject, resolvePath } = require('./utils')

describe('Test eslint-config-mlint/ts-vue', () => {
    const cli = new eslint.CLIEngine({
        configFile: resolvePath('../ts-vue.js'),
        useEslintrc: false,
        ignore: false,
        parserOptions: {
            project: resolvePath('./fixtures/tsconfig.vue.json')
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

    it('Validate vue single file components', () => {
        const filePath = resolvePath('./fixtures/ts-vue.vue')

        /**
         * 验证配置文件
         */
        const config = cli.getConfigForFile(filePath)
        assert.ok(isObject(config))

        const reports = cli.executeOnFiles([filePath])
        // TODO: unknow error
        assert.ok(reports.errorCount === 1 && reports.warningCount === 1)
    })

    it('Validate vue tsx components', () => {
        const filePath = resolvePath('./fixtures/ts-vue.tsx')

        /**
         * 验证配置文件
         */
        const config = cli.getConfigForFile(filePath)
        assert.ok(isObject(config))

        const reports = cli.executeOnFiles([filePath])

        assert.ok(reports.errorCount === 0 && reports.warningCount === 0)
    })
})
