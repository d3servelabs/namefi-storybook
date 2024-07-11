import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import resolve from "@rollup/plugin-node-resolve";
import svgr from "@svgr/rollup";
import {cssModules} from "rollup-plugin-css-modules";
import postcss from "rollup-plugin-postcss";
import postcssImport from "postcss-import";
import postcssNested from "postcss-nested";
import postcssInline from "@sector-labs/postcss-inline-class";
import tailwindcss from "tailwindcss";
import tailwindConfig from "./tailwind.config.mjs";
import autoprefixer from "autoprefixer";
import typescript from "@rollup/plugin-typescript";
import image from "@rollup/plugin-image";
import raw from './build/rollup-plugin-raw';
import json from '@rollup/plugin-json';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import {defineRollupSwcOption, swc} from "rollup-plugin-swc3";
import {fileURLToPath} from "url";
import path from "path";


const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

/** @type { import('rollup').RollupOptions} */
export default {

	input: 'src/dev/index.tsx',
	output: {
		file: 'public/bundle.js',
		format: 'iife'
	},
	plugins: [
		resolve(),
		commonjs(),
		json(),
		nodePolyfills(),
		swc(
			defineRollupSwcOption({
				include: /\.[jt]sx?$/,
				exclude: /(node_modules|dist)/,
				tsconfig: 'tsconfig.json',
				sourceMaps: true,
				cwd: __dirname,
				jsc: {
					baseUrl: __dirname,
				},
			}),
		),

		cssModules(),
		/*
			// image() will always try to add the content as default export,
			// so if you want svgr() to export the SvgComponent as the default export then you have to exclude the svg from image()

			image({
				exclude: [/.*\.svg$/],
			}),
			svgr({ icon: true, memo: true, exportType: 'default', }),
		 */
		image(),
		svgr({ icon: true, memo: true, exportType: 'named', }),
		raw(),

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
						preflight: true,
					},
				}),

				autoprefixer(),
			],
			extract: true, // extracts all css to 'lib/styles.css'
		}),

		// typescript({ tsconfig: './tsconfig.json', sourceMap: false }),

		// babel({
		// 	babelHelpers: 'bundled',
		// 	presets: ['@babel/preset-react'],
		// 	extensions: ['.js', '.jsx', '.ts', '.tsx'],
		// }),
		replace({
			preventAssignment: false,
			'process.env.NODE_ENV': '"development"'
		})
	]
}