declare module '@kucrut/eslint-config' {
	export default namespace _default {
		export { js };
		export { svelte };
	}
	export const js: ({
		readonly rules: Readonly<import("eslint").Linter.RulesRecord>;
	} | {
		plugins: {
			'@stylistic': {
				rules: import("@stylistic/eslint-plugin").Rules;
				configs: import("eslint").ESLint.Plugin["configs"] & import("@stylistic/eslint-plugin").Configs;
			};
		};
		rules: {
			'array-callback-return': "error";
			'constructor-super': "error";
			curly: ["error", string];
			'dot-notation': "error";
			eqeqeq: "error";
			'no-alert': "error";
			'no-bitwise': "error";
			'no-caller': "error";
			'no-cond-assign': ["error", string];
			'no-console': "error";
			'no-const-assign': "error";
			'no-debugger': "error";
			'no-dupe-args': "error";
			'no-dupe-class-members': "error";
			'no-dupe-keys': "error";
			'no-duplicate-case': "error";
			'no-duplicate-imports': "error";
			'no-else-return': "error";
			'no-eval': "error";
			'no-fallthrough': "error";
			'no-irregular-whitespace': "error";
			'no-lonely-if': "error";
			'no-multi-str': "error";
			'no-nested-ternary': "error";
			'no-redeclare': "error";
			'no-shadow': "error";
			'no-undef-init': "error";
			'no-undef': "error";
			'no-unreachable': "error";
			'no-unsafe-negation': "error";
			'no-unused-expressions': "error";
			'no-unused-vars': ["error", {
				ignoreRestSiblings: boolean;
			}];
			'no-useless-computed-key': "error";
			'no-useless-constructor': "error";
			'no-useless-return': "error";
			'no-var': "error";
			'no-with': "error";
			'object-shorthand': "error";
			'prefer-const': ["error", {
				destructuring: string;
			}];
			'valid-typeof': "error";
			'vars-on-top': "off";
			'@stylistic/array-bracket-newline': ["error", string];
			'@stylistic/array-bracket-spacing': ["error", string];
			'@stylistic/array-element-newline': ["error", string];
			'@stylistic/arrow-parens': ["error", string];
			'@stylistic/arrow-spacing': "error";
			'@stylistic/block-spacing': ["error", string];
			'@stylistic/brace-style': ["error", string];
			'@stylistic/comma-dangle': ["error", string];
			'@stylistic/comma-spacing': "error";
			'@stylistic/comma-style': ["error", string];
			'@stylistic/computed-property-spacing': ["error", string];
			'@stylistic/dot-location': ["error", string];
			'@stylistic/eol-last': "error";
			'@stylistic/function-call-argument-newline': ["error", string];
			'@stylistic/function-call-spacing': ["error", string];
			'@stylistic/function-paren-newline': ["error", string];
			'@stylistic/generator-star-spacing': ["error", string];
			'@stylistic/implicit-arrow-linebreak': ["error", string];
			'@stylistic/indent': ["error", string, {
				SwitchCase: number;
			}];
			'@stylistic/jsx-quotes': ["error", string];
			'@stylistic/key-spacing': "error";
			'@stylistic/keyword-spacing': "error";
			'@stylistic/line-comment-position': "error";
			'@stylistic/linebreak-style': ["error", string];
			'@stylistic/lines-between-class-members': "error";
			'@stylistic/max-len': ["error", {
				code: number;
				ignoreRegExpLiterals: boolean;
				ignoreTemplateLiterals: boolean;
				ignoreUrls: boolean;
			}];
			'@stylistic/multiline-ternary': ["error", string];
			'@stylistic/new-parens': "error";
			'@stylistic/newline-per-chained-call': ["error", {
				ignoreChainWithDepth: number;
			}];
			'@stylistic/no-confusing-arrow': "error";
			'@stylistic/no-extra-parens': ["error", string, {
				allowParensAfterCommentPattern: string;
				nestedBinaryExpressions: boolean;
				returnAssign: boolean;
				ternaryOperandBinaryExpressions: boolean;
			}];
			'@stylistic/no-extra-semi': "error";
			'@stylistic/no-floating-decimal': "error";
			'@stylistic/no-mixed-operators': "error";
			'@stylistic/no-mixed-spaces-and-tabs': "error";
			'@stylistic/no-multi-spaces': "error";
			'@stylistic/no-multiple-empty-lines': ["error", {
				max: number;
			}];
			'@stylistic/no-trailing-spaces': "error";
			'@stylistic/no-whitespace-before-property': "error";
			'@stylistic/object-curly-spacing': ["error", string];
			'@stylistic/one-var-declaration-per-line': ["error", string];
			'@stylistic/operator-linebreak': "error";
			'@stylistic/padded-blocks': ["error", string];
			'@stylistic/quote-props': ["error", string];
			'@stylistic/quotes': ["error", string, {
				allowTemplateLiterals: string;
				avoidEscape: boolean;
			}];
			'@stylistic/rest-spread-spacing': "error";
			'@stylistic/semi-spacing': "error";
			'@stylistic/semi': ["error", string];
			'@stylistic/space-before-blocks': "error";
			'@stylistic/space-before-function-paren': ["error", {
				anonymous: string;
				named: string;
				asyncArrow: string;
			}];
			'@stylistic/space-infix-ops': "error";
			'@stylistic/space-in-parens': ["error", string];
			'@stylistic/space-unary-ops': ["error", {
				overrides: {
					'!': boolean;
					yield: boolean;
				};
			}];
			'@stylistic/template-curly-spacing': ["error", string];
			'@stylistic/wrap-iife': "error";
		};
	})[];
	export const svelte: {
		rules: {
			'svelte/button-has-type': "error";
			'svelte/derived-has-same-inputs-outputs': "error";
			'svelte/first-attribute-linebreak': "error";
			'svelte/html-closing-bracket-spacing': "error";
			'svelte/html-quotes': ["error", {
				prefer: string;
			}];
			'svelte/html-self-closing': ["error", {
				component: string;
				normal: string;
				svelte: string;
				void: string;
			}];
			'svelte/indent': ["error", {
				indent: string;
			}];
			'svelte/mustache-spacing': "error";
			'svelte/no-dom-manipulating': "error";
			'svelte/no-dupe-on-directives': "error";
			'svelte/no-dupe-use-directives': "error";
			'svelte/no-extra-reactive-curlies': "error";
			'svelte/no-ignored-unsubscribe': "error";
			'svelte/no-immutable-reactive-statements': "error";
			'svelte/no-inline-styles': "error";
			'svelte/no-navigation-without-resolve': "error";
			'svelte/no-reactive-functions': "error";
			'svelte/no-reactive-literals': "error";
			'svelte/no-reactive-reassign': "error";
			'svelte/no-store-async': "error";
			'svelte/no-spaces-around-equal-signs-in-attribute': "error";
			'svelte/no-svelte-internal': "error";
			'svelte/no-target-blank': "error";
			'svelte/no-useless-mustaches': "error";
			'svelte/no-trailing-spaces': "error";
			'svelte/prefer-class-directive': ["error", {
				prefer: string;
			}];
			'svelte/prefer-destructured-store-props': "error";
			'svelte/require-each-key': "error";
			'svelte/require-event-dispatcher-types': "error";
			'svelte/require-optimized-style-attribute': "error";
			'svelte/require-store-callbacks-use-set-param': "error";
			'svelte/require-stores-init': "error";
			'svelte/require-store-reactive-access': "error";
			'svelte/shorthand-attribute': ["error", {
				prefer: string;
			}];
			'svelte/shorthand-directive': ["error", {
				prefer: string;
			}];
			'svelte/sort-attributes': ["error", {
				order: (string | string[] | {
					match: string;
					sort: string;
				} | {
					match: string[];
					sort: string;
				})[];
			}];
			'svelte/spaced-html-comment': ["error", string];
			'svelte/valid-each-key': "error";
		};
	};

	export {};
}

//# sourceMappingURL=index.d.ts.map