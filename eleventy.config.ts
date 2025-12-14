import htmlmin from './lib/transforms/htmlmin.ts';
import { imageShortcode } from './lib/shortcodes/image.ts';
import eleventyNavigationPlugin from '@11ty/eleventy-navigation';
import yaml from 'js-yaml';
import type { UserConfig, ContentTemplate } from '@11ty/eleventy';

const isProd = process.env.NODE_ENV === 'production';

export default function (eleventyConfig: UserConfig): ContentTemplate {
	// https://www.11ty.dev/docs/data-custom/#yaml
	(eleventyConfig as any).addDataExtension('yml, yaml', (contents: string) => yaml.load(contents));

	// https://www.11ty.dev/docs/shortcodes/#universal-shortcodes
	eleventyConfig.addShortcode('hash', () => String(Date.now()));

	// https://www.11ty.dev/docs/config/#transforms-example-minify-html-output
	if (isProd) eleventyConfig.addTransform('htmlmin', htmlmin);

	// https://www.11ty.dev/docs/watch-serve/#add-your-own-watch-targets
	eleventyConfig.addWatchTarget('./src/');

	// https://www.11ty.dev/docs/plugins/navigation/
	eleventyConfig.addPlugin(eleventyNavigationPlugin);

	// https://www.11ty.dev/docs/plugins/image/
	eleventyConfig.addLiquidShortcode('image', imageShortcode);

	// https://www.11ty.dev/docs/copy/
	eleventyConfig.addPassthroughCopy({
		// htaccess
		'./src/.htaccess': '.htaccess',
		// Favicons
		'./src/images/favicon.svg': './favicon.svg',
		'./src/favicon.ico': './favicon.ico',
		'./src/apple-touch-icon.png': './apple-touch-icon.png',
		'./src/android-chrome-192x192.png': './android-chrome-192x192.png',
		'./src/android-chrome-512x512.png': './android-chrome-512x512.png',
		'./src/site.webmanifest': './site.webmanifest',
		// Images
		'./src/images/bar.jpg': './images/bar.jpg',
		'./src/images/saunagarten.jpg': './images/saunagarten.jpg',
		'./src/images/saunagarten_02.jpg': './images/saunagarten_02.jpg',
	});

	return {
		dir: {
			input: 'views',
			output: 'dist',
			layouts: 'layouts',
			includes: '_includes',
			data: '_data',
		},
	};
}
