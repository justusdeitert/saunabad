import Highway from '@dogstudio/highway';
import { initSwiper } from './swiper';
import { initScrollIndicatorParallax } from './animations';

interface TransitionParams {
	from: HTMLElement;
	to: HTMLElement;
	done: () => void;
}

/**
 * Page Transition with Highway.js
 */
class Fade extends Highway.Transition {
	in({ from, to, done }: TransitionParams) {
		// Animation
		const main = to.querySelector('main');

		if (!main) return done();
		
		const sections: NodeListOf<HTMLElement> = main.querySelectorAll('section, footer, header');

		// Reset Scroll
		window.scrollTo(0, 0);

		// Remove Old View
		from.remove();

		// Staggering animation via setTimeout
		sections.forEach((section, index) => {
			section.style.opacity = '0';

			setTimeout(() => {
				section.classList.add('coming');
			}, index * 100);
		});

		initSwiper();
		initScrollIndicatorParallax();
		done();
	}

	out({ from, done }: TransitionParams) {
		// Animation
		// from.style.opacity = 0;

		done();
	}
}

/**
 * Initialize Highway.js page transitions
 */
export function initHighway() {
	// Call Highway.Core once.
	// Store it in a variable to use events
	const H = new Highway.Core({
		transitions: {
			default: Fade,
		},
	});

	return H;
}
