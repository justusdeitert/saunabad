declare module '@11ty/eleventy' {
	export interface UserConfig {
		addShortcode(name: string, callback: (...args: any[]) => string): void;
		addTransform(name: string, transform: (content: string, outputPath: string) => string): void;
		addWatchTarget(target: string): void;
		addPlugin(plugin: any, options?: any): void;
		addLiquidShortcode(name: string, callback: (...args: any[]) => Promise<string> | string): void;
		addPassthroughCopy(copy: Record<string, string> | string): void;
	}

	export interface ContentTemplate {
		dir?: {
			input?: string;
			output?: string;
			layouts?: string;
			includes?: string;
			data?: string;
		};
	}
}

declare module '@11ty/eleventy-navigation' {
	const plugin: any;
	export default plugin;
}

declare module '@11ty/eleventy-img' {
	interface ImageOptions {
		widths?: number[];
		formats?: string[];
		urlPath?: string;
		outputDir?: string;
		filenameFormat?: (
			id: string,
			src: string,
			width: number,
			format: string,
			options: object
		) => string;
	}

	interface ImageAttributes {
		class?: string;
		alt: string;
		sizes?: string;
		loading?: 'lazy' | 'eager';
		decoding?: 'async' | 'sync' | 'auto';
	}

	interface ImageMetadata {
		[format: string]: {
			url: string;
			width: number;
			height: number;
			filename: string;
			format: string;
		}[];
	}

	function Image(src: string, options?: ImageOptions): Promise<ImageMetadata>;

	namespace Image {
		function generateHTML(metadata: ImageMetadata, attributes: ImageAttributes): string;
	}

	export default Image;
}
