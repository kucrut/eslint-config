/** @type {import('eslint').Linter.FlatConfig} */
export default {
	rules: {
		'svelte/button-has-type': 'error',
		'svelte/derived-has-same-inputs-outputs': 'error',
		'svelte/first-attribute-linebreak': 'error',
		'svelte/html-closing-bracket-spacing': 'error',
		'svelte/html-quotes': [ 'error', { prefer: 'double' } ],
		'svelte/html-self-closing': [ 'error', {
			component: 'always',
			normal: 'never',
			svelte: 'always',
			void: 'always',
		} ],
		'svelte/indent': [ 'error', { indent: 'tab' } ],
		'svelte/mustache-spacing': 'error',
		'svelte/no-dom-manipulating': 'error',
		'svelte/no-dupe-on-directives': 'error',
		'svelte/no-dupe-use-directives': 'error',
		'svelte/no-extra-reactive-curlies': 'error',
		'svelte/no-goto-without-base': 'error',
		'svelte/no-ignored-unsubscribe': 'error',
		'svelte/no-immutable-reactive-statements': 'error',
		'svelte/no-inline-styles': 'error',
		'svelte/no-reactive-functions': 'error',
		'svelte/no-reactive-literals': 'error',
		'svelte/no-reactive-reassign': 'error',
		'svelte/no-store-async': 'error',
		'svelte/no-spaces-around-equal-signs-in-attribute': 'error',
		'svelte/no-svelte-internal': 'error',
		'svelte/no-target-blank': 'error',
		// 'svelte/no-unused-class-name': 'error',
		'svelte/no-useless-mustaches': 'error',
		'svelte/no-trailing-spaces': 'error',
		'svelte/prefer-class-directive': [ 'error', { prefer: 'empty' } ],
		'svelte/prefer-destructured-store-props': 'error',
		'svelte/require-each-key': 'error',
		'svelte/require-event-dispatcher-types': 'error',
		'svelte/require-optimized-style-attribute': 'error',
		'svelte/require-store-callbacks-use-set-param': 'error',
		'svelte/require-stores-init': 'error',
		'svelte/require-store-reactive-access': 'error',
		'svelte/shorthand-attribute': [ 'error', { prefer: 'always' } ],
		'svelte/shorthand-directive': [ 'error', { prefer: 'always' } ],
		'svelte/sort-attributes': [ 'error', {
			order: [
				// `this` property.
				'this',
				// `bind:this` directive.
				'bind:this',
				// `slot` attribute.
				'slot',
				// `--style-props` (Alphabetical order within the same group.)
				{ match: '/^--/u', sort: 'alphabetical' },
				// `style` attribute, and `style:` directives.
				[ 'style', '/^style:/u' ],
				// `class` attribute.
				'class',
				// `class:` directives. (Alphabetical order within the same group.)
				{ match: '/^class:/u', sort: 'alphabetical' },
				// other attributes. (Alphabetical order within the same group.)
				{
					match: [ '!/:/u', '!/^(?:this|class|style)$/u', '!/^--/u', '!/^on/u' ],
					sort: 'alphabetical',
				},
				// `bind:` directives (other then `bind:this`), and `on:` directives.
				[ '/^bind:/u', '!bind:this', '/^on/u' ],
				// `use:` directives. (Alphabetical order within the same group.)
				{ match: '/^use:/u', sort: 'alphabetical' },
				// `transition:` directive.
				{ match: '/^transition:/u', sort: 'alphabetical' },
				// `in:` directive.
				{ match: '/^in:/u', sort: 'alphabetical' },
				// `out:` directive.
				{ match: '/^out:/u', sort: 'alphabetical' },
				// `animate:` directive.
				{ match: '/^animate:/u', sort: 'alphabetical' },
				// `let:` directives. (Alphabetical order within the same group.)
				{ match: '/^let:/u', sort: 'alphabetical' },
			],
		} ],
		'svelte/spaced-html-comment': [ 'error', 'always' ],
		'svelte/valid-each-key': 'error',
	},
};
