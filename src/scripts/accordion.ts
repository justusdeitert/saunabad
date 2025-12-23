import { gsap } from 'gsap';

/**
 * Initialize accordion functionality
 */
export function initAccordion() {
	const accordions = document.querySelectorAll('.accordion');

	accordions.forEach((accordion) => {
		const collapses: NodeListOf<HTMLElement> = accordion.querySelectorAll('.accordion__collapse');

		// Initialize open items
		collapses.forEach((collapse) => {
			const body = collapse.querySelector('.accordion__body') as HTMLElement;
			const content = collapse.querySelector('.accordion__content') as HTMLElement;
			
			if (collapse.classList.contains('open') && body && content) {
				gsap.set(body, { height: 'auto' });
				gsap.set(content, { opacity: 1, y: 0 });
			}
		});

		collapses.forEach((collapse) => {
			const header: HTMLElement | null = collapse.querySelector('.accordion__header');
			const body = collapse.querySelector('.accordion__body') as HTMLElement;
			const content = collapse.querySelector('.accordion__content') as HTMLElement;

			header && header.addEventListener('click', () => {
				const isOpen = collapse.classList.contains('open');

				// Close all other accordions
				collapses.forEach((otherCollapse) => {
					if (otherCollapse !== collapse && otherCollapse.classList.contains('open')) {
						const otherBody = otherCollapse.querySelector('.accordion__body') as HTMLElement;
						const otherContent = otherCollapse.querySelector('.accordion__content') as HTMLElement;
						
						otherCollapse.classList.remove('open');
						
						gsap.to(otherContent, {
							opacity: 0,
							y: -10,
							duration: 0.2,
							ease: 'power2.in'
						});
						
						gsap.to(otherBody, {
							height: 0,
							duration: 0.4,
							ease: 'power2.inOut'
						});
					}
				});

				if (!isOpen) {
					// Open this accordion
					collapse.classList.add('open');
					
					// Animate height
					gsap.set(body, { height: 'auto' });
					gsap.from(body, {
						height: 0,
						duration: 0.25,
						ease: 'power2.out'
					});
					
					// Animate content fade in
					gsap.fromTo(content, 
						{ opacity: 0, y: -10 },
						{ opacity: 1, y: 0, duration: 0.2, delay: 0.1, ease: 'power2.out' }
					);
				} else {
					// Close this accordion
					collapse.classList.remove('open');
					
					gsap.to(content, {
						opacity: 0,
						y: -10,
						duration: 0.15,
						ease: 'power2.in'
					});
					
					gsap.to(body, {
						height: 0,
						duration: 0.25,
						ease: 'power2.inOut'
					});
				}
			});
		});
	});
}
