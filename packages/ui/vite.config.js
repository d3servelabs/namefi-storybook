/* eslint-disable no-undef */
import {defineConfig} from 'vite';
import {fileURLToPath} from 'url';
import dts from 'vite-plugin-dts';
// import dts from 'rollup-plugin-dts';
import react from '@vitejs/plugin-react';
import image from "@rollup/plugin-image";
import raw from './build/rollup-plugin-raw';
import path from "path";
import svgr from "vite-plugin-svgr";
import postcssImport from "postcss-import";
import postcssNested from "postcss-nested";
import postcssInline from "@sector-labs/postcss-inline-class";
import tailwindcss from "tailwindcss";
import tailwindConfig from "./tailwind.config.mjs";
import autoprefixer from "autoprefixer";


const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		{ ...image({dom:false}),enforce: 'pre'},
		svgr({
			svgrOptions: {
				icon: true, memo: true, exportType: 'named', ref: true, svgo: false, titleProp: true
			},
			include: '**/*.svg',
		}),
		raw(),
		react(),
		dts({
			tsconfigPath: 'tsconfig.build.json',
			// rollupTypes: true,
		})
	],css:{
		postcss:{
			to: 'bundle.css',
			plugins:[
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
			]
		}
	},
	build: {
		copyPublicDir: false,
		lib: {
			entry: [path.resolve(__dirname, 'src/lib/index.ts')],
			name: 'namefi-ui',
			fileName: (format, entryName)=>{
				if(format === 'cjs'){
					return `cjs/${entryName}.js`;
				}
				return `esm/${entryName}.mjs`;

			},
			formats: ['cjs', 'es'],
		},
		rollupOptions: {
			external: ['react', 'react/jsx-runtime'],
			plugins: [],
			output: {
				globals: {
					react: 'React',
				},
			},
		},
	},
});
