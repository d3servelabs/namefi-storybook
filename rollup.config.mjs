import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';
import image from '@rollup/plugin-image';
import svgr from '@svgr/rollup'
import {fileURLToPath} from 'url';
// This is required to read package.json file when
// using Native ES modules in Node.js
// https://rollupjs.org/command-line-interface/#importing-package-json
import {createRequire} from 'node:module';
import alias from "@rollup/plugin-alias";
import path from "path";

const requireFile = createRequire(import.meta.url);
const packageJson = requireFile('./package.json');

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

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
            svgr({icon: true, memo: true, exportType: "default",}),
            alias({
                entries: [
                    {find: '@', replacement: path.resolve(__dirname, './src')},
                    {find: '@icons', replacement: path.resolve(__dirname, './src/components/icons')},
                    {find: '@components', replacement: path.resolve(__dirname, './src/components')},
                    {find: '@assets', replacement: path.resolve(__dirname, './src/assets')},
                    {find: '@pages', replacement: path.resolve(__dirname, './src/pages')},
                    {find: '@stories', replacement: path.resolve(__dirname, './src/stories')},
                    {find: '@utils', replacement: path.resolve(__dirname, './src/utils')},
                ]
            }),
            commonjs(),
            postcss({
                extensions: ['.css'],
                extract: true,  // extracts all css to 'lib/styles.css'
            }),
            typescript({tsconfig: './tsconfig.lib.json',}),
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
