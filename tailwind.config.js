const colors = require('tailwindcss/colors');
 
/**
 * @template T
 * @param {number} start
 * @param {number} stop
 * @param {number} step
 * @param {(value:number,index:number)=>T} converter
 * @returns {T[]}
 */
const arrayRange = (start, stop, step, converter) =>
	Array.from({ length: (stop - start) / step + 1 }, (value, index) => {
		const output = start + index * step;
		if (!converter) return output;
		else return converter(output, index);
	});

const grayscale = Object.fromEntries(
	Array(99)
		.fill(0)
		.map((value, index, array) => [index + 1, `${index + 1}%`]),
);

const baseUnit = Object.fromEntries(
	arrayRange(0, 100, 0.25, (output) => [output, `${(output / 4).toFixed(4)}rem`]),
);
const baseUnitX = Object.fromEntries(
	arrayRange(0, 100, 0.25, (output) => [`${output}lg`, `${(output / 4).toFixed(4)}rem`]),
);

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	safelist: [{ pattern: /(primary|brand|error)/ }],
	theme: {
		extend: {
			borderRadius: baseUnit,
			gap: baseUnit,
			fontSize: baseUnitX,
			width: baseUnit,
			maxWidth: baseUnit,
			height: baseUnit,
			maxHeight: baseUnit,
			inset: baseUnit,
			padding: baseUnit,
			minHeight: baseUnit,
			fontFamily: {
				primary: ['Roboto Mono', 'Serif'],
				secondary: ['Nunito', 'Serif'],
				third: ['Roboto Flex', 'Serif'],
			},
			colors: {
				warning: {
					DEFAULT: '#FF3C3C',
					500: '#FF3C3C',
				},
				error: {
					light: '#FFC7C7',
					100: '#FFC7C7',
					DEFAULT: '#FF3C3C',
					500: '#FF3C3C',
					20: '#3C1919',
					900: '#3C1919',
				},
				alert: {
					100: '#FBF9CE',
					DEFAULT: '#FEF556',
				},

				pending: '#FBF9CE',
				occupied: '#FEF556',
				primary: {
					200: '#C6EEDB',
					light: '#C6EEDB',

					DEFAULT: '#48E59B',
					500: '#48E59B',

					600: '#3DBB7F',
					80: '#3DBB7F',

					700: '#399B6D',
					60: '#399B6D',

					800: '#0A4429',
					dark: '#0A4429',

					900: '#1C3B2D',
					20: '#1C3B2D',

					950: '#141C18',
					5: '#141C18',

				},
				grey: {
					lighter: '#D6D6D6',
					50: '#BCBCBC',
					DEFAULT: '#797979',
					darker: '#4B4B4B'
				},
				brand: {
					100: '#c6eedb0d',
					200: '#c6eedb33',

					300: '#C6EEDB',
					light: '#C6EEDB',

					dark: '#232C27',
					black: '#111111',
					blue: '#70A8F4',

					green: '#48E59B',
					20: '#48E59B',
				},
				black: {
					200: '#d9d9d9cc',
					400: '#797979',

					500: '#D9D9D9',
					70: '#565656',

					brand: '#313131',
					600: '#313131e6',

					700: '#111111b3',

					background: '#111111',
					900: '#111111',

					1000: '#000000',
				},
				border: {
					500: '#444444',
				},
			},
			keyframes: {
				loading: {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(100%)' },
				},
				dissolve: {
					'0%': {
						opacity: 0,
					},
					'50%': {
						opacity: 1,
					},
				},
			},
			animation: {
				loading: 'loading 1s ease-in-out infinite alternate',
				dissolve: 'dissolve 0.2s linear 1',
			},
		},
	},
	plugins: [
		require('tailwind-scrollbar')({
			nocompatible: true,
		}),
	],
};
