/* eslint-disable no-undef */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@icons': path.resolve(__dirname, './src/components/icons'),
			'@components': path.resolve(__dirname, './src/components'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@stories': path.resolve(__dirname, './src/stories'),
			'@utils': path.resolve(__dirname, './src/utils'),
		},
	},
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/index.ts'),
			name: 'namefi-ui',
			fileName: 'index',
		},
		rollupOptions: {
			external: ['react'],
			plugins: [svgr()],
			output: {
				globals: {
					react: 'React',
				},
			},
		},
	},
});
