const isProd = process.env.NODE_ENV === 'production';

module.exports = {
	syntax: require('postcss-scss'),
	plugins: [
		require('postcss-import'),
		require('@csstools/postcss-sass')({
			silenceDeprecations: ['legacy-js-api'],
		}),
		require('@tailwindcss/postcss'),
		require('autoprefixer'),
		isProd && require('cssnano')({ preset: 'default' }),
	].filter(Boolean),
};
