const isProd = process.env.NODE_ENV === 'production';

export default {
	syntax: 'postcss-scss',
	plugins: [
		(await import('postcss-import')).default,
		(await import('tailwindcss/nesting/index.js')).default,
		(await import('tailwindcss')).default,
		(await import('autoprefixer')).default,
		(await import('@csstools/postcss-sass')).default,
		isProd && (await import('cssnano')).default({ preset: 'default' }),
	],
};
