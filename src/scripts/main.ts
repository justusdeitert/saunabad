import Highway from '@dogstudio/highway';
import { gsap } from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

interface TransitionParams {
	from: HTMLElement;
	to: HTMLElement;
	done: () => void;
}

/**
 * Scroll indicator parallax fade effect
 */
function initScrollIndicatorParallax() {
	// Kill existing ScrollTriggers to prevent duplicates
	ScrollTrigger.getAll().forEach(trigger => trigger.kill());
	
	const scrollIndicator = document.querySelector('#scroll-indicator');
	
	if (scrollIndicator) {
		gsap.to(scrollIndicator, {
			opacity: 0,
			y: 50,
			ease: 'none',
			scrollTrigger: {
				trigger: '#hero',
				start: '15% top',
				end: '60% top',
				scrub: true,
			}
		});
	}

	// Hero background parallax
	const heroBg = document.querySelector('#hero-bg');
	
	if (heroBg) {
		gsap.to(heroBg, {
			y: 80,
			ease: 'none',
			scrollTrigger: {
				trigger: '#hero',
				start: 'top top',
				end: 'bottom top',
				scrub: true,
			}
		});
	}

	// Decorative circles parallax
	const decorativeCircles = document.querySelector('#decorative-circles');
	
	if (decorativeCircles) {
		gsap.to(decorativeCircles, {
			y: -100,
			ease: 'none',
			scrollTrigger: {
				trigger: '#preise',
				start: 'top bottom',
				end: 'bottom top',
				scrub: true,
			}
		});
	}

	// Gallery circles parallax (move down)
	const galleryCircles = document.querySelector('#gallery-circles');
	
	if (galleryCircles) {
		gsap.to(galleryCircles, {
			y: 80,
			ease: 'none',
			scrollTrigger: {
				trigger: '#gallery',
				start: 'top bottom',
				end: 'bottom top',
				scrub: true,
			}
		});
	}

	// Massage ring parallax (move up)
	const massageRing = document.querySelector('#massage-ring');
	
	if (massageRing) {
		gsap.to(massageRing, {
			y: -60,
			ease: 'none',
			scrollTrigger: {
				trigger: '#massage-ring',
				start: 'top bottom',
				end: 'bottom top',
				scrub: true,
			}
		});
	}

	// Section dividers - grow width on scroll into view
	const dividers = document.querySelectorAll('.section-divider');
	
	dividers.forEach((divider) => {
		gsap.fromTo(divider, 
			{ scaleX: 0, transformOrigin: 'left center' },
			{
				scaleX: 1,
				duration: 0.8,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: divider,
					start: 'top 85%',
					toggleActions: 'play none none none',
				}
			}
		);
	});
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

// Call Highway.Core once.
// Store it in a variable to use events
// Call Highway.Core once.
const H = new Highway.Core({
	transitions: {
		default: Fade,
	},
});

/**
 * Import of Alpine.js
 * @link https://alpinejs.dev/
 */
// import Alpine from 'alpinejs';
// window.Alpine = Alpine;
// Alpine.start();

/**
 * Import Swiper
 */
// import Swiper JS
import Swiper from 'swiper';
import 'swiper/css';

function initSwiper() {
	const swiper = new Swiper('.swiper', {
		slidesPerView: 1.2,
		spaceBetween: 40,
		breakpoints: {
			480: {
				slidesPerView: 1.5,
				spaceBetween: 30,
			},
			1024: {
				slidesPerView: 2.5,
				spaceBetween: 70,
			},
		},
	});

	document.querySelector('.swiper-button-prev')?.addEventListener('click', () => {
		swiper.slidePrev();
	});

	document.querySelector('.swiper-button-next')?.addEventListener('click', () => {
		swiper.slideNext();
	});
}

initSwiper();

/**
 * Accordion
 */
function initAccordion() {
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

initAccordion();

// scroll to anchor with gsap
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

// Initialize scroll indicator parallax
initScrollIndicatorParallax();
