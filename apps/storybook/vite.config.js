/* eslint-disable no-undef */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svgr(),react(),],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
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
