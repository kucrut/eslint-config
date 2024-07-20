import { createBundle } from 'dts-buddy';

await createBundle( {
	include: [ 'configs' ],
	output: 'types/index.d.ts',
	modules: {
		'@kucrut/eslint-config': 'configs/index.js',
	},
} );
