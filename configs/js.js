import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin-js';

/** @type {import('eslint').Linter.Config[]} */
export default [
	js.configs.recommended,
	{
		plugins: { '@stylistic/js': stylistic },
		rules: {
			'array-callback-return': 'error',
			'constructor-super': 'error',
			'curly': [ 'error', 'all' ],
			'dot-notation': 'error',
			'eqeqeq': 'error',
			'no-alert': 'error',
			'no-bitwise': 'error',
			'no-caller': 'error',
			'no-cond-assign': [ 'error', 'except-parens' ],
			'no-console': 'error',
			'no-const-assign': 'error',
			'no-debugger': 'error',
			'no-dupe-args': 'error',
			'no-dupe-class-members': 'error',
			'no-dupe-keys': 'error',
			'no-duplicate-case': 'error',
			'no-duplicate-imports': 'error',
			'no-else-return': 'error',
			'no-eval': 'error',
			'no-fallthrough': 'error',
			'no-irregular-whitespace': 'error',
			'no-lonely-if': 'error',
			'no-multi-str': 'error',
			'no-nested-ternary': 'error',
			'no-redeclare': 'error',
			'no-shadow': 'error',
			'no-undef-init': 'error',
			'no-undef': 'error',
			'no-unreachable': 'error',
			'no-unsafe-negation': 'error',
			'no-unused-expressions': 'error',
			'no-unused-vars': [ 'error', { ignoreRestSiblings: true } ],
			'no-useless-computed-key': 'error',
			'no-useless-constructor': 'error',
			'no-useless-return': 'error',
			'no-var': 'error',
			'no-with': 'error',
			'object-shorthand': 'error',
			'prefer-const': [ 'error', { destructuring: 'all' } ],
			'valid-typeof': 'error',
			'vars-on-top': 'off',
			'@stylistic/js/array-bracket-newline': [ 'error', 'consistent' ],
			'@stylistic/js/array-bracket-spacing': [ 'error', 'always' ],
			'@stylistic/js/array-element-newline': [ 'error', 'consistent' ],
			'@stylistic/js/arrow-parens': [ 'error', 'as-needed' ],
			'@stylistic/js/arrow-spacing': 'error',
			'@stylistic/js/block-spacing': [ 'error', 'always' ],
			'@stylistic/js/brace-style': [ 'error', '1tbs' ],
			'@stylistic/js/comma-dangle': [ 'error', 'always-multiline' ],
			'@stylistic/js/comma-spacing': 'error',
			'@stylistic/js/comma-style': [ 'error', 'last' ],
			'@stylistic/js/computed-property-spacing': [ 'error', 'always' ],
			'@stylistic/js/dot-location': [ 'error', 'property' ],
			'@stylistic/js/eol-last': 'error',
			'@stylistic/js/func-call-spacing': 'error',
			'@stylistic/js/function-call-argument-newline': [ 'error', 'consistent' ],
			'@stylistic/js/function-call-spacing': [ 'error', 'never' ],
			'@stylistic/js/function-paren-newline': [ 'error', 'multiline' ],
			'@stylistic/js/generator-star-spacing': [ 'error', 'before' ],
			'@stylistic/js/implicit-arrow-linebreak': [ 'error', 'beside' ],
			'@stylistic/js/indent': [ 'error', 'tab', { SwitchCase: 1 } ],
			'@stylistic/js/jsx-quotes': [ 'error', 'prefer-double' ],
			'@stylistic/js/key-spacing': 'error',
			'@stylistic/js/keyword-spacing': 'error',
			'@stylistic/js/line-comment-position': 'error',
			'@stylistic/js/linebreak-style': [ 'error', 'unix' ],
			'@stylistic/js/lines-between-class-members': 'error',
			'@stylistic/js/max-len': [ 'error', {
				code: 120,
				ignoreRegExpLiterals: true,
				ignoreTemplateLiterals: true,
				ignoreUrls: true,
			} ],
			'@stylistic/js/multiline-ternary': [ 'error', 'always-multiline' ],
			'@stylistic/js/new-parens': 'error',
			'@stylistic/js/newline-per-chained-call': [ 'error', { ignoreChainWithDepth: 3 } ],
			'@stylistic/js/no-confusing-arrow': 'error',
			'@stylistic/js/no-extra-parens': [ 'error', 'all', {
				allowParensAfterCommentPattern: '@type',
				enforceForArrowConditionals: false,
				enforceForNewInMemberExpressions: false,
				nestedBinaryExpressions: false,
				returnAssign: false,
				ternaryOperandBinaryExpressions: false,
			} ],
			'@stylistic/js/no-extra-semi': 'error',
			'@stylistic/js/no-floating-decimal': 'error',
			'@stylistic/js/no-mixed-operators': 'error',
			'@stylistic/js/no-mixed-spaces-and-tabs': 'error',
			'@stylistic/js/no-multi-spaces': 'error',
			'@stylistic/js/no-multiple-empty-lines': [ 'error', { max: 1 } ],
			'@stylistic/js/no-trailing-spaces': 'error',
			'@stylistic/js/no-whitespace-before-property': 'error',
			'@stylistic/js/object-curly-spacing': [ 'error', 'always' ],
			'@stylistic/js/one-var-declaration-per-line': [ 'error', 'initializations' ],
			'@stylistic/js/operator-linebreak': 'error',
			'@stylistic/js/padded-blocks': [ 'error', 'never' ],
			'@stylistic/js/quote-props': [ 'error', 'consistent' ],
			'@stylistic/js/quotes': [ 'error', 'single', {
				allowTemplateLiterals: true,
				avoidEscape: true,
			} ],
			'@stylistic/js/rest-spread-spacing': 'error',
			'@stylistic/js/semi-spacing': 'error',
			'@stylistic/js/semi': [ 'error', 'always' ],
			'@stylistic/js/space-before-blocks': 'error',
			'@stylistic/js/space-before-function-paren': [ 'error', {
				anonymous: 'never',
				named: 'never',
				asyncArrow: 'always',
			} ],
			'@stylistic/js/space-infix-ops': 'error',
			'@stylistic/js/space-in-parens': [ 'error', 'always' ],
			'@stylistic/js/space-unary-ops': [ 'error', { overrides: { '!': true, 'yield': true } } ],
			'@stylistic/js/template-curly-spacing': [ 'error', 'always' ],
			'@stylistic/js/wrap-iife': 'error',
		},
	},
];
