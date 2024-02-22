
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
    Array.from(
        { length: ((stop - start) / step) + 1 },
        (value, index) =>{
          const output = start + index * step;
          if(!converter) return output;
          else return converter(output,index)
        }
    );

const grayscale = Object.fromEntries(
    Array(99)
        .fill(0)
        .map((value, index, array) => [index + 1, `${index + 1}%`]),
);

const borderRadius = Object.fromEntries(
    arrayRange(0,100,1,(output)=> ([`rounded-${output}`,`${(output/4).toPrecision(2)}rem`]))
);
const fontSize = Object.fromEntries(
    arrayRange(0,100,1,(output)=> ([`text-${output}`,`${(output/4).toPrecision(2)}rem`]))
);
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      borderRadius,fontSize,
      fontFamily: {
        primary: ['Roboto Mono', 'Serif'],
        secondary: ['Nunito', 'Serif'],
        third: ['Roboto Flex', 'Serif'],
      },
      colors: {
        warning: '#FF3C3C',
        primary: {
          500: '#48E59B',
          700: '#48e59bcc',
          900: '#0A4429'
        },
        brand: {
          100: '#c6eedb0d',
          200: '#c6eedb33',
          300: '#C6EEDB',
          dark: '#232C27',
          black: '#111111',
          blue: '#70A8F4',
          green: '#48E59B'
        },
        black: {
          200: '#d9d9d9cc',
          400: '#797979',
          500: '#D9D9D9',
          600: '#313131e6',
          700: '#111111b3',
          900: '#111111',
          1000: '#000000'
        },
        border: {
          500: '#444444'
        }
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
            opacity: 1
          }
        }
      },
      animation: {
        'loading': 'loading 1s ease-in-out infinite alternate',
        'dissolve': 'dissolve 0.2s linear 1'
      },

    },
  },
  plugins: [],
}

