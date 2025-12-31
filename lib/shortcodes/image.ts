import Image from '@11ty/eleventy-img';
import fs from 'fs';
import path from 'path';

// https://www.11ty.dev/docs/plugins/image/
export async function imageShortcode(
	src: string,
	alt: string,
	sizes: string,
	classes: string
): Promise<string> {
	if (!fs.existsSync(src)) {
		src = './src/images/placeholder.jpg';
	}

	const metadata = await Image(src, {
		widths: [300, 600, 1000],
		formats: ['webp', 'jpeg'],
		urlPath: '/images/',
		outputDir: './dist/images/',
		filenameFormat: function (
			id: string,
			src: string,
			width: number,
			format: string,
			options: object
		): string {
			const extension = path.extname(src);
			const name = path.basename(src, extension);

			// name: filename
			// id: hash of the original image
			// src: original image path
			// width: current width in px
			// format: current file format
			// options: set of options passed to the Image call
			return `${name}-${width}.${format}`;
		},
	});

	const imageAttributes = {
		class: classes,
		alt,
		sizes,
		loading: 'lazy' as const,
		decoding: 'async' as const,
	};

	// You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
	return Image.generateHTML(metadata, imageAttributes);
}
