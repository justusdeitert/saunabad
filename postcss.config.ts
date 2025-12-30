import type { Config } from 'postcss-load-config';

const isProd = process.env.NODE_ENV === 'production';

const config: Config = {
	syntax: 'postcss-scss',
	plugins: [
		(await import('postcss-import')).default,
		(await import('@csstools/postcss-sass')).default({
			silenceDeprecations: ['legacy-js-api'],
		}),
		(await import('@tailwindcss/postcss')).default,
		(await import('autoprefixer')).default,
		isProd && (await import('cssnano')).default({ preset: 'default' }),
	],
};

export default config;
