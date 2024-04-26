import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';
import image from '@rollup/plugin-image';
import {fileURLToPath} from 'url';
// This is required to read package.json file when
// using Native ES modules in Node.js
// https://rollupjs.org/command-line-interface/#importing-package-json
import {createRequire} from 'node:module';
import path from "path";
import postcssNested from 'postcss-nested';
import {swc, defineRollupSwcOption} from 'rollup-plugin-swc3';

const requireFile = createRequire(import.meta.url);
const packageJson = requireFile('./package.json');

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory
import tailwindcss from 'tailwindcss';
import tailwindConfig from './tailwind.config.js';
import svgr from "vite-plugin-svgr";
import postcssImport from "postcss-import";
import autoprefixer from "autoprefixer";
import postcssInline from "@sector-labs/postcss-inline-class";

export default [
	{
		input: 'src/index.ts',
		output: [
			{
				file: packageJson.main,
				format: 'cjs',
				sourcemap: true,
			},
			{
				file: packageJson.module,
				format: 'esm',
				sourcemap: true,
			},
		],

		plugins: [
			peerDepsExternal(),
			resolve(),
			commonjs(),
			swc(
				defineRollupSwcOption({
					include: /\.[jt]sx?$/,
					exclude: /(node_modules|lib)/,
					tsconfig: 'tsconfig.lib.json',
					sourceMaps: true,
					cwd: __dirname,
					jsc: {
						baseUrl: __dirname,
					}
				})
			),
			svgr({icon: true, memo: true, exportType: "default",}),
			postcss({
				extensions: ['.css'],
				plugins: [
					postcssImport(),
					postcssNested({
						bubble: ['media', 'tailwind'],
						unwrap: ['media', 'tailwind']
					}),
					postcssInline(),
					tailwindcss({
						...tailwindConfig, corePlugins: {
							preflight: false
						},
					}),

					autoprefixer(),

				],
				extract: true,  // extracts all css to 'lib/styles.css'
			}),

			typescript({tsconfig: './tsconfig.lib.json', sourceMap: false}),
			image(),
		],
		external: [
			...Object.keys({
				...packageJson.peerDependencies,
			})
		]
	},
	{
		input: 'lib/esm/types/index.d.ts',
		output: [{file: 'lib/index.d.ts', format: 'esm'}],
		plugins: [dts()],
		external: [/\.css$/],
	},
];
