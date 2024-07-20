# ESLint config

## Install

```sh
npm add -D eslint globals @eslint/js @stylistic/eslint-plugin-js @kucrut/eslint-config
```

## Configure

### JavaScript

```js
// eslint.config.js

import configs from '@kucrut/eslint-config';
import globals from 'globals';

export default [
	// ...other configs.
	...configs.js,
	{
		ignores: [ /* ... */ ],
	},
];
```

### Svelte

```sh
# Note the exact versions of these packages, there's bug in their latest versions.
npm add -D eslint-plugin-svelte@2.42.0 svelte-eslint-parser@0.40.0
```

```js
import configs from '@kucrut/eslint-config';
import globals from 'globals';
import svelte_parser from 'svelte-eslint-parser';
import svelte_plugin from 'eslint-plugin-svelte';

export default [
	// ...other configs.
	...configs.js,
	...svelte_plugin.configs[ 'flat/recommended' ],
	{
		files: [
			'*.svelte.js',
			'*.svelte.ts',
			'*.svelte',
			'**/*.svelte.js',
			'**/*.svelte.ts',
			'**/*.svelte',
		],
		languageOptions: {
			parser: svelte_parser,
		},
		plugins: {
			svelte: svelte_plugin,
		},
		...configs.svelte,
	},
	{
		ignores: [ /* ... */ ],
	},
];

```
