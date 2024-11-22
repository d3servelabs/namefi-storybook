export const allModes = {
	mobile: {
		viewport: 'small',
	},
	desktop: {
		viewport: 'large',
	},
	dark: {
		backgrounds: { value: '#1E293B' },
		theme: 'dark',
	},
	light: {
		backgrounds: { value: '#fff' },
		theme: 'light',
	},
	'dark desktop': {
		backgrounds: { value: '#1E293B' },
		theme: 'dark',
		viewport: 'large',
	},
	'dark iphone': {
		backgrounds: { value: '#1E293B' },
		theme: 'dark',
		viewport: 'iphone14ProMaxPortrait',
	},
	'light mobile': {
		backgrounds: { value: '#fff' },
		theme: 'light',
		viewport: 'small',
	},
};
