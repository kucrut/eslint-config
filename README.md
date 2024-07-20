# ESLint config

## Install

```sh
npm add -D eslint globals @eslint/js @stylistic/eslint-plugin-js @kucrut/eslint-config
```

## Configure

## JavaScript

```js
// eslint.config.js

import configs from '@kucrut/eslint-config';
import globals from 'globals';

export default [
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
	},
	...configs.js,
	{
		ignores: [ /* ... */ ],
	},
];
```

### Svelte

```sh
npm add -D eslint-plugin-svelte svelte-eslint-parser
```

Then add `...configs.svelte` to the configuration array.
