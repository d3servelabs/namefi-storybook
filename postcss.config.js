const tailwindcss = require('tailwindcss');
const tailwindcssNesting = require('tailwindcss/nesting');
const autoprefixer = require('autoprefixer');
const postcssNested = require('postcss-nested');
const postcss = require('postcss');

module.exports = postcss(
	postcssNested(),
	tailwindcssNesting(),
	tailwindcss(),
	autoprefixer(),
);
