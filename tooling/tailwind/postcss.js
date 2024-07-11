const tailwindcss = require('tailwindcss');
const tailwindcssNesting = require('tailwindcss/nesting');
const autoprefixer = require('autoprefixer');
const postcssNested = require('postcss-nested');
const postcssImport = require('postcss-import');
const postcss = require('postcss');
const postcssInline = require('@sector-labs/postcss-inline-class')


module.exports = postcss(
	postcssImport(),
	postcssNested(),
	postcssInline(),
	tailwindcssNesting(),
	tailwindcss(),
	autoprefixer(),
);
