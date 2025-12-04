// tailwind.config.js
import customColors from './colors.json' with { type: 'json' };

export default {
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '1024px',
			xl: '1640px',
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			blue: customColors.blue,
			yellow: customColors.yellow,
			green: customColors.green,
			shilo: customColors.shilo,
			lila: customColors.lila,
			dark: customColors.dark,
			zest: customColors.zest,
		},
		fontFamily: {
			sans: ['Mukta', 'ui-sans-serif', 'system-ui'],
			serif: ['Rosario', 'ui-serif', 'Georgia'],
			display: ['Limelight', 'Oswald'],
		},
	},
	plugins: [],
};
