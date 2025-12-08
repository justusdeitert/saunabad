declare module '@dogstudio/highway' {
	interface TransitionParams {
		from: HTMLElement;
		to: HTMLElement;
		done: () => void;
	}

	export class Transition {
		in(params: TransitionParams): void;
		out(params: TransitionParams): void;
	}

	interface CoreOptions {
		transitions?: {
			default?: typeof Transition;
			[key: string]: typeof Transition | undefined;
		};
	}

	export class Core {
		constructor(options?: CoreOptions);
		on(event: string, callback: (...args: any[]) => void): void;
		off(event: string, callback?: (...args: any[]) => void): void;
		redirect(href: string, transition?: typeof Transition): void;
		attach(links: NodeListOf<HTMLAnchorElement> | HTMLAnchorElement[]): void;
		detach(links: NodeListOf<HTMLAnchorElement> | HTMLAnchorElement[]): void;
	}

	const Highway: {
		Core: typeof Core;
		Transition: typeof Transition;
	};

	export default Highway;
}
