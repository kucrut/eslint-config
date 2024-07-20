# ESLint config

## Install

```sh
npm add -D eslint globals @eslint/js @stylistic/eslint-plugin-js @kucrut/eslint-config
```

## Configure

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
		ignores: [ '...' ],
	},
];
```
