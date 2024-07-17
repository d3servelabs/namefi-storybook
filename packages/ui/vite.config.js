/* eslint-disable no-undef */
import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import dts from 'vite-plugin-dts';
// import dts from 'rollup-plugin-dts';
import react from '@vitejs/plugin-react';
import image from '@rollup/plugin-image';
import raw from './build/rollup-plugin-raw';
import path from 'path';
import svgr from 'vite-plugin-svgr';
import postcssImport from 'postcss-import';
import postcssNested from 'postcss-nested';
import postcssInline from '@sector-labs/postcss-inline-class';
import tailwindcss from 'tailwindcss';
import tailwindConfig from './tailwind.config.mjs';
import autoprefixer from 'autoprefixer';
import { createRequire } from 'node:module';
import vitePluginSvgBase64 from './build/vite-plugin-svg-base64.ts';
import { libInjectCss } from 'vite-plugin-lib-inject-css'

const requireFile = createRequire(import.meta.url);
const packageJson = requireFile('./package.json');

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

// https://vitejs.dev/config/
export default defineConfig(function (command, mode, isSsrBuild, isPreview) {
	return {
		clearScreen: false,
		plugins: [
			react(),
			// libInjectCss(),
			...assetsConfig(),
			dts({
				tsconfigPath: 'tsconfig.build.json',
				// rollupTypes: true
			}),
		],
		css: {
			postcss: {
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
							preflight: command !== 'build',
						},
					}),

					autoprefixer(),
				],
			},
		},
		build: {
			ssr: true,
			copyPublicDir: false,
			lib: {
				entry: ['src/lib/index.ts'],
				name: 'namefi-ui',
				fileName: 'index',
				formats: ['cjs', 'es'],
			},
			rollupOptions: {
				external: [
					'react',
					'react/jsx-runtime',
					...Object.keys({
						...packageJson.peerDependencies,
					}),
				],
				plugins: [],
				output: {
					globals: {
						react: 'React',
					},
				},
			},
		},
	};
});
function  assetsConfig(){
	return [
		/* This the final desired config but as in the transition phase from rollup we'll be using the second config
			{ ...image({dom:false}),enforce: 'pre'},
			raw(),
			svgr({
				svgrOptions: {
					icon: true,
					memo: true,
					exportType: 'default',
					ref: true,
					svgo: false,
					titleProp: true,
				},
				include: [/^.*.svg\?react$/],
			}),
			 */

		{ ...image({dom:false, exclude: /^.*.svg$/}),enforce: 'pre'},
		raw(),

		svgr({
			svgrOptions: {
				icon: true,
				memo: true,
				exportType: 'named',
				ref: true,
				svgo: false,
				titleProp: true,
			},
			include: [/^.*.svg$/,],
		}),
		svgr({
			svgrOptions: {
				icon: true,
				memo: true,
				exportType: 'default',
				ref: true,
				svgo: false,
				titleProp: true,
			},
			include: [/^.*.svg\?react$/],
		}),
		vitePluginSvgBase64(),
	]
}
