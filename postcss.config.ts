import postcssImport from 'postcss-import';
import postcssSass from '@csstools/postcss-sass';
import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import postcssScss from 'postcss-scss';
import type { Config } from 'postcss-load-config';

const isProd = process.env.NODE_ENV === 'production';

const config: Config = {
	syntax: postcssScss,
	plugins: [
		postcssImport,
		postcssSass({ silenceDeprecations: ['legacy-js-api'] }),
		tailwindcss,
		autoprefixer,
		isProd && cssnano({ preset: 'default' }),
	].filter(Boolean),
};

export default config;
