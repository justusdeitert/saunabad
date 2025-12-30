const isProd = process.env.NODE_ENV === 'production';

export default {
	syntax: 'postcss-scss',
	plugins: [
		(await import('postcss-import')).default,
		(await import('@csstools/postcss-sass')).default,
		(await import('@tailwindcss/postcss')).default({ configPath: './tailwind.config.js' }),
		(await import('autoprefixer')).default,
		isProd && (await import('cssnano')).default({ preset: 'default' }),
	],
};
