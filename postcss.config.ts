import type { Config } from 'postcss-load-config';

const isProd = process.env.NODE_ENV === 'production';

export default async (): Promise<Config> => {
	const postcssImport = (await import('postcss-import')).default;
	const postcssSass = (await import('@csstools/postcss-sass')).default;
	const tailwindcss = (await import('@tailwindcss/postcss')).default;
	const autoprefixer = (await import('autoprefixer')).default;
	const cssnano = isProd ? (await import('cssnano')).default : null;
	const postcssScss = (await import('postcss-scss')).default;

	return {
		syntax: postcssScss,
		plugins: [
			postcssImport,
			postcssSass({ silenceDeprecations: ['legacy-js-api'] }),
			tailwindcss,
			autoprefixer,
			cssnano && cssnano({ preset: 'default' }),
		].filter(Boolean),
	};
};
