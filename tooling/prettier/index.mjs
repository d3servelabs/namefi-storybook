/** @typedef  {import("prettier").Config} PrettierConfig */
/** @typedef {import("prettier-plugin-tailwindcss").PluginOptions} TailwindConfig */

import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const pathName = require.resolve('@namefi/tailwind-config');

/** @type { PrettierConfig | TailwindConfig } */
const config = {
	singleQuote: true,
	trailingComma: 'all',
	useTabs: true,
	tabWidth: 4,
	semi: true,
	printWidth: 100,
	bracketSameLine: true,

	plugins: ['prettier-plugin-tailwindcss'],
	tailwindConfig: pathName,
};

export default config;
