import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

/**
 * Scroll indicator parallax fade effect
 */
export function initScrollIndicatorParallax() {
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

	// Info leaf parallax (move up)
	const infoLeaf = document.querySelector('#info-leaf');
	
	if (infoLeaf) {
		gsap.fromTo(infoLeaf, 
			{ y: 60 },
			{
				y: -40,
				ease: 'none',
				scrollTrigger: {
					trigger: '#info',
					start: 'top bottom',
					end: 'bottom top',
					scrub: true,
				}
			}
		);
	}

	// Sauna sticky image - smooth scale and subtle vertical shift
	const saunaImageInner = document.querySelector('#sauna-image-inner');
	
	if (saunaImageInner) {
		gsap.fromTo(saunaImageInner,
			{ scale: 1.2, y: -20 },
			{
				scale: 1,
				y: 20,
				ease: 'none',
				scrollTrigger: {
					trigger: '#sauna',
					start: 'top bottom',
					end: 'bottom top',
					scrub: 0.8,
				}
			}
		);
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
