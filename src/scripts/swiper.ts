import Swiper from 'swiper';
import 'swiper/css';

/**
 * Initialize Swiper gallery
 */
export function initSwiper() {
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
