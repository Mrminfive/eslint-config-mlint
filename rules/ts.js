/**
 * 本文件规则由 typescript-eslint 提供
 * 文档见 https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
 */

module.exports = {
    // 要求重载成员必须写在一起
    '@typescript-eslint/adjacent-overload-signatures': 'error',

    // 数组的定义方式（禁止使用泛型去定义数组）
    '@typescript-eslint/array-type': ['error', {
        default: 'array'
    }],

    // 不允许 await 不返回 promise 的函数
    '@typescript-eslint/await-thenable': 'error',

    // 禁止使用 @ts-ignore（太过严苛，暂时关闭）
    '@typescript-eslint/ban-ts-ignore': 'off',

    // 禁止使用特定类型
    '@typescript-eslint/ban-types': 'off',

    // 强制要求使用驼峰命名法
    '@typescript-eslint/camelcase': [
        'error',
        {
            // 涉及到可能存在接口对接问题，暂时关闭属性的检查
            properties: 'never',
            ignoreDestructuring: false
        }
    ],

    // 强制类或类型命名使用大驼峰命名法
    '@typescript-eslint/class-name-casing': 'error',

    // 统一使用 interface 来定义对象类型
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

    // 强制声明函数的返回值类型（太过严苛，暂时关闭）
    '@typescript-eslint/explicit-function-return-type': 'off',

    // 强制类/interface 属性需要显式设置可访问性修饰符
    '@typescript-eslint/explicit-member-accessibility': [
        'error',
        {
            accessibility: 'explicit',
            overrides: {
                accessors: 'explicit',
                constructors: 'no-public',
                methods: 'explicit',
                properties: 'explicit',
                parameterProperties: 'explicit'
            }
        }
    ],

    // 函数名与调用它的括号间无空格（扩展至 func-call-spacing ）
    '@typescript-eslint/func-call-spacing': ['error', 'never'],

    // 强制泛型类型命名规范，正确命名规则：'^T[A-Z][a-zA-Z]+$'
    '@typescript-eslint/generic-type-naming': 'error',

    // 缩进
    '@typescript-eslint/indent': [
        'error',
        4,
        {
            SwitchCase: 1,
            VariableDeclarator: 1,
            outerIIFEBody: 1,
            MemberExpression: 1,
            FunctionDeclaration: {
                parameters: 1,
                body: 1
            },
            FunctionExpression: {
                parameters: 1,
                body: 1
            },
            CallExpression: {
                arguments: 1
            },
            ArrayExpression: 1,
            ObjectExpression: 1,
            ImportDeclaration: 1,
            flatTernaryExpressions: false,
            // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
            ignoredNodes: [
                'JSXElement',
                'JSXElement > *',
                'JSXAttribute',
                'JSXIdentifier',
                'JSXNamespacedName',
                'JSXMemberExpression',
                'JSXSpreadAttribute',
                'JSXExpressionContainer',
                'JSXOpeningElement',
                'JSXClosingElement',
                'JSXText',
                'JSXEmptyExpression',
                'JSXSpreadChild'
            ],
            ignoreComments: false
        }
    ],

    // 要求 interface 以 I 为前缀命名
    '@typescript-eslint/interface-name-prefix': ['error', 'never'],

    // 设置 interface & type 的成员的分隔符
    '@typescript-eslint/member-delimiter-style': [
        'error',
        {
            multiline: {
                delimiter: 'none',
                requireLast: false
            },
            singleline: {
                requireLast: false
            }
        }
    ],

    // 强制私有属性/方法的命名规则
    '@typescript-eslint/member-naming': [
        'error',
        { private: '^_' }
    ],

    // 类/interface 的成员/属性排序规格
    '@typescript-eslint/member-ordering': [
        'error',
        {
            default: [
                'public-static-field',
                'protected-static-field',
                'private-static-field',

                'public-instance-field',
                'protected-instance-field',
                'private-instance-field',

                'public-field',
                'protected-field',
                'private-field',

                'static-field',
                'instance-field',

                'field',

                'constructor',

                'public-static-method',
                'protected-static-method',
                'private-static-method',

                'public-instance-method',
                'protected-instance-method',
                'private-instance-method',

                'public-method',
                'protected-method',
                'private-method',

                'static-method',
                'instance-method',

                'method'
            ]
        }
    ],

    // 不要使用 new Array() 和 Array() 创建数组，除非为了构造某一长度的空数组，或者使用泛型声明具体类型
    '@typescript-eslint/no-array-constructor': 'error',

    // 禁止出现空函数
    '@typescript-eslint/no-empty-function': [
        'error',
        {
            allow: [
                'arrowFunctions',
                'functions',
                'methods'
            ]
        }
    ],

    // 禁止出现空的接口
    '@typescript-eslint/no-empty-interface': [
        'error',
        {
            allowSingleExtends: true
        }
    ],

    // 禁止使用 any（太过严苛，使用警告就好）
    '@typescript-eslint/no-explicit-any': 'warn',

    // 禁止不必要的小括号
    '@typescript-eslint/no-extra-parens': [
        'off',
        'all',
        {
            conditionalAssign: true,
            nestedBinaryExpressions: false,
            returnAssign: false,
            ignoreJSX: 'all', // delegate to eslint-plugin-react
            enforceForArrowConditionals: false
        }
    ],

    // 当没必要使用类进行功能封装时，会发出⚠️
    '@typescript-eslint/no-extraneous-class': [
        'warn',
        {
            allowConstructorOnly: true,
            allowEmpty: false,
            allowStaticOnly: false
        }
    ],

    // 需要处理 Promise 的 reject 状态
    '@typescript-eslint/no-floating-promises': 'error',

    // 禁止使用for-in循环遍历数组
    '@typescript-eslint/no-for-in-array': 'error',

    // 对于初始化为数字，字符串或布尔值的变量或参数，禁止显式类型声明，使用类型推导（关闭该规则，默认需要显性设置）
    '@typescript-eslint/no-inferrable-types': 'off',

    // 禁用魔术数字
    '@typescript-eslint/no-magic-numbers': [
        'off',
        {
            ignore: [],
            ignoreArrayIndexes: true,
            enforceConst: true,
            detectObjects: false
        }
    ],

    // 强制执行的有效的定义 new 和 constructor
    '@typescript-eslint/no-misused-new': 'error',

    // 避免滥用 promise
    '@typescript-eslint/no-misused-promises': 'error',

    // 禁止使用自定义 TypeScript module 和 namespace（这里开放在声明文件中使用）
    '@typescript-eslint/no-namespace': [
        'error',
        {
            allowDefinitionFiles: true,
            allowDeclarations: false
        }
    ],

    // 禁止使用!后缀运算符来做非空断言
    '@typescript-eslint/no-non-null-assertion': 'error',

    // 禁止在类构造函数中使用参数属性
    '@typescript-eslint/no-parameter-properties': 'error',

    // 禁止使用 require 进行导入模块
    '@typescript-eslint/no-require-imports': 'error',

    // 禁止使用没必要的 this 别名
    '@typescript-eslint/no-this-alias': 'error',

    // 禁止使用 type 定义类型（太过严苛，改为允许使用联合类型）
    '@typescript-eslint/no-type-alias': [
        'error',
        {
            allowAliases: 'in-unions'
        }
    ],

    // 在不需要名称空间限定符时发出警告
    '@typescript-eslint/no-unnecessary-qualifier': 'warn',

    // 如果泛型类型变量为默认值时则不需要设置（关闭该规则，以保证更好的语意）
    '@typescript-eslint/no-unnecessary-type-arguments': 'off',

    // 如果类型断言无法改变表达式的类型，则发出警告
    '@typescript-eslint/no-unnecessary-type-assertion': 'warn',

    // 声明的变量必须被使用
    '@typescript-eslint/no-unused-vars': [
        'error',
        {
            vars: 'all',
            args: 'after-used',
            ignoreRestSiblings: true
        }
    ],

    // 不要在声明前就使用变量
    '@typescript-eslint/no-use-before-define': [
        'error',
        {
            functions: false,
            classes: false,
            variables: false
        }
    ],

    // 避免不必要的 construtor
    '@typescript-eslint/no-useless-constructor': 'error',

    // 除import语句外，不允许使用require语句
    '@typescript-eslint/no-var-requires': 'error',

    // 如果索引仅用于访问正在迭代的数组，则首选'for-of'循环超过标准'for'循环
    '@typescript-eslint/prefer-for-of': 'warn',

    // 函数接口的定义需要继承至 Function
    '@typescript-eslint/prefer-function-type': 'error',

    // 强制使用 includes 方法而不使用 indexOf
    '@typescript-eslint/prefer-includes': 'error',

    // 需要使用namespace关键字而不是module关键字来声明自定义TypeScript模块
    '@typescript-eslint/prefer-namespace-keyword': 'error',

    '@typescript-eslint/prefer-readonly': 'off',

    // 当正则不存在全局标识 g 时，强制使用 RegExp.exec() 替代 String.match 使用（太过限制，暂时取消）
    '@typescript-eslint/prefer-regexp-exec': 'off',

    // 强制使用 String.startsWith 和 String.endsWith 代替检查子字符串的其他等效方法（太过限制，暂时取消）
    '@typescript-eslint/prefer-string-starts-ends-with': 'off',

    // 强制需要任何返回 Promise 的函数或方法才能标记为异步
    '@typescript-eslint/promise-function-async': 'error',

    // 强制 Array.sort 方法使用时必须传递排序方法
    '@typescript-eslint/require-array-sort-compare': 'error',

    // 添加两个变量时，操作数必须都是数字类型或字符串类型，以此来避免隐式转换
    '@typescript-eslint/restrict-plus-operands': 'error',

    // 是否使用分号断句
    '@typescript-eslint/semi': ['error', 'never'],

    // 限制布尔表达式中允许的类型
    '@typescript-eslint/strict-boolean-expressions': 'off',

    // 禁止使用三斜杆类型引用指令，更推荐使用 import 来引用
    '@typescript-eslint/triple-slash-reference': [
        'error',
        {
            path: 'never',
            types: 'never',
            lib: 'never'
        }
    ],

    // 要求类型注释周围的间距一致
    '@typescript-eslint/type-annotation-spacing': 'error',

    // 强制要求方法调用是必须是预期 this 指向
    '@typescript-eslint/unbound-method': [
        'error',
        {
            ignoreStatic: true
        }
    ],

    // 强制定义类型
    '@typescript-eslint/typedef': 'error',

    // 当函数重载可以合并时提示
    '@typescript-eslint/unified-signatures': 'warn'
}
