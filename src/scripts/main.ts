/**
 * Main entry point
 * Initializes all modules
 */

import { initScrollIndicatorParallax } from './animations';
import { initHighway } from './transitions';
import { initSwiper } from './swiper';
import { initAccordion } from './accordion';
import { initSmoothScroll } from './smooth-scroll';

// Initialize Highway.js page transitions
initHighway();

// Initialize Swiper gallery
initSwiper();

// Initialize accordion
initAccordion();

// Initialize smooth scroll for anchor links
initSmoothScroll();

// Initialize scroll indicator parallax
initScrollIndicatorParallax();
