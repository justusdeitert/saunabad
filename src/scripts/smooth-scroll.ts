import { gsap } from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

// Register GSAP plugins
gsap.registerPlugin(ScrollToPlugin);

/**
 * Initialize smooth scroll for anchor links
 */
export function initSmoothScroll() {
	const anchors: NodeListOf<HTMLElement> = document.querySelectorAll('a[href*="#"]');
	
	anchors.forEach((anchor) => {
		anchor.addEventListener('click', (event) => {
			event.preventDefault();

			anchor && gsap.to(window, {
				duration: 0.5,
				scrollTo: {
					y: anchor.getAttribute('href')?.toString(),
					offsetY: document.querySelector('nav')?.offsetHeight,
				},
				ease: 'power2.inOut'
			});
		});
	});
}
