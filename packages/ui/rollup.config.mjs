import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';
import image from '@rollup/plugin-image';
import raw from './build/rollup-plugin-raw';
import { fileURLToPath } from 'url';
import { createRequire } from 'node:module';
import path from 'path';
import postcssNested from 'postcss-nested';
import { swc, defineRollupSwcOption } from 'rollup-plugin-swc3';
import tailwindcss from 'tailwindcss';
import tailwindConfig from './tailwind.config.mjs';
import postcssImport from 'postcss-import';
import autoprefixer from 'autoprefixer';
import postcssInline from '@sector-labs/postcss-inline-class';
import { cssModules } from 'rollup-plugin-css-modules';
import svgr from '@svgr/rollup';
const requireFile = createRequire(import.meta.url);
const packageJson = requireFile('./package.json');

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

export default [
	{
		input: 'src/lib/index.ts',
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
					exclude: /(node_modules|dist)/,
					tsconfig: 'tsconfig.build.json',
					sourceMaps: true,
					cwd: __dirname,
					jsc: {
						baseUrl: __dirname,
					},
				}),
			),
			raw(),
			svgr({ icon: true, memo: true, exportType: 'default' }),
			cssModules(),
			postcss({
				extensions: ['.css'],
				plugins: [
					postcssImport(),
					postcssNested({
						bubble: ['media', 'tailwind'],
						unwrap: ['media', 'tailwind'],
					}),
					postcssInline(),
					tailwindcss({
						...tailwindConfig,
						corePlugins: {
							preflight: false,
						},
					}),

					autoprefixer(),
				],
				extract: true, // extracts all css to 'dist/styles.css'
			}),

			typescript({ tsconfig: './tsconfig.build.json', sourceMap: false }),
			image(),
		],
		external: [
			...Object.keys({
				...packageJson.peerDependencies,
			}),
		],
	},
	{
		input: 'dist/esm/types/index.d.ts',
		output: [{ file: 'dist/index.d.ts', format: 'esm' }],
		plugins: [dts()],
		external: [/\.css$/],
	},
];
