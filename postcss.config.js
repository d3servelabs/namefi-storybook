const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const postcssNested = require('postcss-nested');
const postcss = require('postcss');

module.exports = postcss(
	tailwindcss(),
	autoprefixer(),
	postcssNested(),
	
);
