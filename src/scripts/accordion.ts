/**
 * Initialize accordion functionality
 */
export function initAccordion() {
	const accordions = document.querySelectorAll('.accordion');

	accordions.forEach((accordion) => {
		const collapses: NodeListOf<HTMLElement> = accordion.querySelectorAll('.accordion__collapse');

		collapses.forEach((collapse) => {
			const header: HTMLElement | null = collapse.querySelector('.accordion__header');

			header?.addEventListener('click', () => {
				const isOpen = collapse.classList.contains('open');

				// Close all other accordions
				collapses.forEach((otherCollapse) => {
					if (otherCollapse !== collapse && otherCollapse.classList.contains('open')) {
						otherCollapse.classList.remove('open');
					}
				});

				// Toggle this accordion
				collapse.classList.toggle('open', !isOpen);
			});
		});
	});
}
