import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';
import image from '@rollup/plugin-image';
import svgr from '@svgr/rollup'

// This is required to read package.json file when
// using Native ES modules in Node.js
// https://rollupjs.org/command-line-interface/#importing-package-json
import { createRequire } from 'node:module';
import alias from "@rollup/plugin-alias";
import path from "path";
const requireFile = createRequire(import.meta.url);
const packageJson = requireFile('./package.json');

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
			alias({
				entries: [
					{find:'@', replacement:path.resolve(__dirname, './src')},
					{find:'@icons', replacement: path.resolve(__dirname, './src/components/icons')},
					{find:'@components', replacement: path.resolve(__dirname, './src/components')},
					{find:'@assets', replacement: path.resolve(__dirname, './src/assets')},
					{find:'@pages', replacement: path.resolve(__dirname, './src/pages')},
					{find:'@stories', replacement: path.resolve(__dirname, './src/stories')},
					{find:'@utils', replacement: path.resolve(__dirname, './src/utils')},
				]
			}),
			svgr({icon:true}),
			peerDepsExternal(),
			resolve(),
			commonjs(),
			postcss({
				extensions: ['.css'],
				extract: true,  // extracts all css to 'dist/styles.css'
			}),
			typescript({ tsconfig: './tsconfig.lib.json' }),
			image(),
		],
	},
	{
		input: 'lib/index.d.ts',
		output: [{ file: 'lib/index.d.ts', format: 'es' }],
		plugins: [dts()],
		external: [/\.css$/],
	},
];
